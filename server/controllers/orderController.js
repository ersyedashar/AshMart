const Order = require('../models/Order');
const Product = require('../models/Product');
const { sendEmail, orderConfirmation } = require('../utils/email');

exports.createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, shipping: shippingBody, paymentMethod, couponCode, discount, note } = req.body;
    const shipping = shippingAddress || shippingBody;
    if (!items || !items.length || !shipping) {
      return res.status(400).json({ success: false, message: 'Items and shipping required' });
    }
    let subtotal = 0;
    const orderItems = [];
    for (const item of items) {
      const productId = item.product || item.id;
      const qty = item.quantity || item.qty || 1;
      const product = await Product.findById(productId);
      if (!product) return res.status(404).json({ success: false, message: `Product not found: ${productId}` });
      if (product.stock < qty) {
        return res.status(400).json({ success: false, message: `Insufficient stock for "${product.title}". Available: ${product.stock}, requested: ${qty}` });
      }
      if (qty < 1) return res.status(400).json({ success: false, message: 'Quantity must be at least 1' });
      subtotal += product.price * qty;
      orderItems.push({ product: product._id, title: product.title, image: product.image, price: product.price, qty });
      await Product.findByIdAndUpdate(productId, { $inc: { stock: -qty, sold: qty } });
    }
    const disc = discount || 0;
    const taxable = subtotal - disc;
    let shippingCost = 0;
    if (taxable < 2000) shippingCost = 199;
    else if (taxable < 5000) shippingCost = 99;
    const tax = Math.round(taxable * 0.08);
    const total = taxable + tax + shippingCost;
    const order = await Order.create({
      user: req.user._id,
      items: orderItems,
      shipping: {
        fullName: shipping.fullName || shipping.name,
        phone: shipping.phone,
        email: shipping.email,
        address: shipping.address || shipping.street,
        landmark: shipping.landmark,
        city: shipping.city,
        pincode: shipping.pincode,
        state: shipping.state,
        note: shipping.note || note || ''
      },
      subtotal,
      shippingCost,
      tax,
      discount: disc,
      total,
      couponCode: couponCode || undefined,
      payment: { method: paymentMethod || 'razorpay', status: paymentMethod === 'cod' ? 'pending' : 'pending' }
    });
    res.status(201).json({ success: true, order });
    sendEmail(order.shipping.email, `Order Confirmed #${order.orderNumber} - AshMart`, orderConfirmation(order)).catch(() => {});
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 }).populate('items.product', 'title image');
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product', 'title image');
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    if (order.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
