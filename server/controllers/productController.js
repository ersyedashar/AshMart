const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const { category, search, sort, featured, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (category && category !== 'all') filter.category = category;
    if (featured === 'true') filter.featured = true;
    if (search) filter.$text = { $search: search };
    let sortObj = {};
    if (sort === 'price-asc') sortObj.price = 1;
    else if (sort === 'price-desc') sortObj.price = -1;
    else if (sort === 'rating') sortObj.rating = -1;
    else if (sort === 'popular') sortObj.reviews = -1;
    else sortObj.createdAt = -1;
    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter).sort(sortObj).skip((page - 1) * limit).limit(parseInt(limit));
    res.json({ success: true, products, total, page: parseInt(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
