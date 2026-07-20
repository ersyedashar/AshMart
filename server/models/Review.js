const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String, trim: true, maxlength: 100 },
  text: { type: String, required: true, maxlength: 1000 },
  verified: { type: Boolean, default: false }
}, { timestamps: true });

reviewSchema.index({ product: 1, user: 1 }, { unique: true });

reviewSchema.statics.calcAvgRating = async function(productId) {
  const stats = await this.aggregate([
    { $match: { product: new mongoose.Types.ObjectId(productId) } },
    { $group: { _id: '$product', avgRating: { $avg: '$rating' }, numReviews: { $sum: 1 } } }
  ]);
  const Product = mongoose.model('Product');
  if (stats.length) {
    await Product.findByIdAndUpdate(productId, { rating: Math.round(stats[0].avgRating * 10) / 10, reviews: stats[0].numReviews });
  } else {
    await Product.findByIdAndUpdate(productId, { rating: 0, reviews: 0 });
  }
};

reviewSchema.post('save', function() { this.constructor.calcAvgRating(this.product); });
reviewSchema.post('findOneAndDelete', function(doc) { if (doc) doc.constructor.calcAvgRating(doc.product); });

module.exports = mongoose.model('Review', reviewSchema);
