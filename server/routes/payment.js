const router = require('express').Router();
const { createOrder, verifyPayment, getKey } = require('../controllers/paymentController');
const { protect } = require('../middleware/auth');

router.get('/key', getKey);
router.post('/create-order', protect, createOrder);
router.post('/verify', protect, verifyPayment);

module.exports = router;
