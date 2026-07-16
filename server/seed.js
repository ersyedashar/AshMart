require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const products = require('./products.json');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await Product.deleteMany({});
    console.log('Cleared existing products');
    const result = await Product.insertMany(products);
    console.log(`Seeded ${result.length} products`);
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err.message);
    process.exit(1);
  }
}
seed();
