const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
const { sendEmail, orderShipped, orderDelivered } = require('../utils/email');

exports.getStats = async (req, res) => {
  try {
    const [totalProducts, totalOrders, totalUsers, revenue, recentOrders, ordersByStatus] = await Promise.all([
      Product.countDocuments(),
      Order.countDocuments(),
      User.countDocuments(),
      Order.aggregate([{ $group: { _id: null, total: { $sum: '$total' } } }]),
      Order.find().sort({ createdAt: -1 }).limit(5).populate('user', 'name email'),
      Order.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }])
    ]);
    const totalRevenue = revenue.length > 0 ? revenue[0].total : 0;
    const statusMap = {};
    ordersByStatus.forEach(s => { statusMap[s._id] = s.count; });
    res.json({ success: true, stats: { totalProducts, totalOrders, totalUsers, totalRevenue, recentOrders, ordersByStatus: statusMap } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = status ? { status } : {};
    const orders = await Order.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(Number(limit)).populate('user', 'name email phone');
    const total = await Order.countDocuments(filter);
    res.json({ success: true, orders, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status, carrier, trackingNumber, trackingUrl, estimatedDelivery } = req.body;
    const valid = ['placed', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'];
    if (!valid.includes(status)) return res.status(400).json({ success: false, message: 'Invalid status' });
    const update = { status };
    if (status === 'delivered') update.deliveredAt = new Date();
    if (status === 'cancelled') update.cancelledAt = new Date();
    if (status === 'shipped') {
      update.shippedAt = new Date();
      update.tracking = { carrier: carrier || '', trackingNumber: trackingNumber || '', trackingUrl: trackingUrl || '', estimatedDelivery: estimatedDelivery || undefined };
    }
    update.$push = { statusHistory: { status, date: new Date(), note: req.body.note || '' } };
    const order = await Order.findByIdAndUpdate(req.params.id, update, { new: true }).populate('user', 'name email');
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    if (status === 'cancelled') {
      for (const item of order.items) {
        await Product.findByIdAndUpdate(item.product, { $inc: { stock: item.qty, sold: -item.qty } });
      }
    }
    if (status === 'shipped' && order.shipping?.email) {
      sendEmail(order.shipping.email, `Order Shipped #${order.orderNumber} - AshMart`, orderShipped(order)).catch(() => {});
    }
    if (status === 'delivered' && order.shipping?.email) {
      sendEmail(order.shipping.email, `Order Delivered #${order.orderNumber} - AshMart`, orderDelivered(order)).catch(() => {});
    }
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (search) filter.$text = { $search: search };
    const products = await Product.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(Number(limit));
    const total = await Product.countDocuments(filter);
    res.json({ success: true, products, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const users = await User.find().select('-password').sort({ createdAt: -1 }).skip((page - 1) * limit).limit(Number(limit));
    const total = await User.countDocuments();
    res.json({ success: true, users, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getRevenueChart = async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 30;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const dailyRevenue = await Order.aggregate([
      { $match: { createdAt: { $gte: startDate }, status: { $ne: 'cancelled' } } },
      { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        revenue: { $sum: '$total' },
        orders: { $sum: 1 }
      }},
      { $sort: { _id: 1 } }
    ]);

    const topProducts = await Order.aggregate([
      { $unwind: '$items' },
      { $group: { _id: '$items.title', totalSold: { $sum: '$items.qty' }, revenue: { $sum: { $multiply: ['$items.price', '$items.qty'] } } } },
      { $sort: { totalSold: -1 } },
      { $limit: 5 }
    ]);

    const categoryRevenue = await Order.aggregate([
      { $unwind: '$items' },
      { $lookup: { from: 'products', localField: 'items.product', foreignField: '_id', as: 'productInfo' } },
      { $unwind: { path: '$productInfo', preserveNullAndEmptyArrays: true } },
      { $group: { _id: '$productInfo.category', revenue: { $sum: { $multiply: ['$items.price', '$items.qty'] } } } },
      { $sort: { revenue: -1 } }
    ]);

    res.json({ success: true, dailyRevenue, topProducts, categoryRevenue });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
