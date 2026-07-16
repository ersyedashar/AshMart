const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, required: true, lowercase: true },
  price: { type: Number, required: true, min: 0 },
  originalPrice: { type: Number, min: 0 },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviews: { type: Number, default: 0 },
  badge: { type: String, default: '' },
  badgeText: { type: String, default: '' },
  image: { type: String, required: true },
  images: [String],
  description: { type: String, required: true },
  colors: [String],
  sizes: [String],
  featured: { type: Boolean, default: false },
  stock: { type: Number, default: 100, min: 0 },
  sold: { type: Number, default: 0 }
}, { timestamps: true });

productSchema.index({ title: 'text', description: 'text', category: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ featured: 1 });

module.exports = mongoose.model('Product', productSchema);
