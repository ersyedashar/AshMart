require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
const products = require('./products.json');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Seed admin user
    const adminExists = await User.findOne({ email: 'admin@ashmart.com' });
    if (!adminExists) {
      await User.create({
        name: 'AshMart Admin',
        email: 'admin@ashmart.com',
        phone: '9000000000',
        password: 'Admin@123',
        role: 'admin'
      });
      console.log('Admin user created: admin@ashmart.com / Admin@123');
    } else {
      console.log('Admin user already exists');
    }

    // Seed products
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
