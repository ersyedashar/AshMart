const Review = require('../models/Review');
const Order = require('../models/Order');

exports.getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createReview = async (req, res) => {
  try {
    const { rating, title, text } = req.body;
    if (!rating || !text) {
      return res.status(400).json({ success: false, message: 'Rating and text are required' });
    }
    const existing = await Review.findOne({ user: req.user._id, product: req.params.productId });
    if (existing) {
      return res.status(400).json({ success: false, message: 'You already reviewed this product' });
    }
    const order = await Order.findOne({
      user: req.user._id,
      'items.product': req.params.productId,
      status: 'delivered'
    });
    const review = await Review.create({
      user: req.user._id,
      product: req.params.productId,
      rating,
      title,
      text,
      verified: !!order
    });
    await review.populate('user', 'name');
    res.status(201).json({ success: true, review });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: 'You already reviewed this product' });
    }
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
    if (review.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    await Review.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
