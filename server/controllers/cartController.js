const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product', 'title price image stock');
    if (!cart) cart = await Cart.create({ user: req.user._id, items: [] });
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.syncCart = async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ success: false, message: 'Items array required' });
    }
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items });
    } else {
      const merged = {};
      for (const item of items) {
        const pid = item.product || item.id;
        if (merged[pid]) {
          merged[pid] += item.qty || 1;
        } else {
          merged[pid] = item.qty || 1;
        }
      }
      for (const item of cart.items) {
        const pid = item.product.toString();
        if (merged[pid]) {
          merged[pid] += item.qty;
        } else {
          merged[pid] = item.qty;
        }
      }
      cart.items = Object.entries(merged).map(([product, qty]) => ({ product, qty }));
      await cart.save();
    }
    await cart.populate('items.product', 'title price image stock');
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, qty = 1 } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = await Cart.create({ user: req.user._id, items: [] });
    const existing = cart.items.find(i => i.product.toString() === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.items.push({ product: productId, qty });
    }
    await cart.save();
    await cart.populate('items.product', 'title price image stock');
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { qty } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    if (qty <= 0) {
      cart.items = cart.items.filter(i => i.product.toString() !== req.params.productId);
    } else {
      const item = cart.items.find(i => i.product.toString() === req.params.productId);
      if (item) item.qty = qty;
    }
    await cart.save();
    await cart.populate('items.product', 'title price image stock');
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    cart.items = cart.items.filter(i => i.product.toString() !== req.params.productId);
    await cart.save();
    await cart.populate('items.product', 'title price image stock');
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) { cart.items = []; await cart.save(); }
    res.json({ success: true, cart: { items: [] } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
