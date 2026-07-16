const router = require('express').Router();
const { register, login, getMe, updateProfile, addAddress, getAddresses, toggleWishlist } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.post('/address', protect, addAddress);
router.get('/addresses', protect, getAddresses);
router.post('/wishlist/:productId', protect, toggleWishlist);

module.exports = router;
