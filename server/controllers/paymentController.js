const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order');

let razorpay;
function getRazorpay() {
  if (!razorpay && process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
    razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
  }
  return razorpay;
}

exports.createOrder = async (req, res) => {
  try {
    const rp = getRazorpay();
    if (!rp) return res.status(500).json({ success: false, message: 'Payment gateway not configured' });
    const { amount, orderId } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ success: false, message: 'Invalid amount' });
    const options = {
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: orderId || 'receipt_' + Date.now()
    };
    const order = await rp.orders.create(options);
    res.json({ success: true, razorpayOrder: order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(body).digest('hex');
    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
    if (orderId) {
      await Order.findByIdAndUpdate(orderId, {
        payment: {
          method: 'razorpay',
          razorpayOrderId: razorpay_order_id,
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
          status: 'captured'
        },
        status: 'confirmed'
      });
    }
    res.json({ success: true, message: 'Payment verified successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getKey = (req, res) => {
  res.json({ success: true, key: process.env.RAZORPAY_KEY_ID });
};
