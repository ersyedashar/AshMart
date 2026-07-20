const router = require('express').Router();
const { protect, adminOnly } = require('../middleware/auth');
const admin = require('../controllers/adminController');

router.use(protect, adminOnly);

router.get('/stats', admin.getStats);
router.get('/revenue-chart', admin.getRevenueChart);
router.get('/orders', admin.getOrders);
router.put('/orders/:id/status', admin.updateOrderStatus);
router.get('/products', admin.getProducts);
router.post('/products', admin.createProduct);
router.put('/products/:id', admin.updateProduct);
router.delete('/products/:id', admin.deleteProduct);
router.get('/users', admin.getUsers);

module.exports = router;
