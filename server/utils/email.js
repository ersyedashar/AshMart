const nodemailer = require('nodemailer');

let transporter;
function getTransporter() {
  if (!transporter && process.env.SMTP_HOST) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
  return transporter;
}

const from = process.env.EMAIL_FROM || 'AshMart <noreply@ashmart.com>';

async function sendEmail(to, subject, html) {
  const transport = getTransporter();
  if (!transport) {
    console.log('Email skipped (SMTP not configured):', subject, '->', to);
    return false;
  }
  try {
    await transport.sendMail({ from, to, subject, html });
    console.log('Email sent:', subject, '->', to);
    return true;
  } catch (err) {
    console.error('Email error:', err.message);
    return false;
  }
}

function orderConfirmation(order) {
  const itemsHtml = order.items.map(i =>
    `<tr><td style="padding:8px;border-bottom:1px solid #eee">${i.title}</td><td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${i.qty}</td><td style="padding:8px;border-bottom:1px solid #eee;text-align:right">₹${(i.price * i.qty).toLocaleString('en-IN')}</td></tr>`
  ).join('');

  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff">
    <div style="background:#2563EB;padding:24px;text-align:center">
      <h1 style="color:#fff;margin:0;font-size:24px">AshMart</h1>
    </div>
    <div style="padding:32px">
      <h2 style="color:#1a1a2e;margin:0 0 8px">Order Confirmed!</h2>
      <p style="color:#666;margin:0 0 24px">Thank you for your order. We'll notify you when it ships.</p>
      <div style="background:#f8fafc;border-radius:8px;padding:16px;margin-bottom:24px">
        <p style="margin:0 0 4px;color:#666;font-size:13px">Order Number</p>
        <p style="margin:0;font-size:18px;font-weight:bold;color:#2563EB">#${order.orderNumber}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
        <thead><tr style="background:#f8fafc"><th style="padding:8px;text-align:left">Item</th><th style="padding:8px;text-align:center">Qty</th><th style="padding:8px;text-align:right">Price</th></tr></thead>
        <tbody>${itemsHtml}</tbody>
      </table>
      <div style="border-top:2px solid #eee;padding-top:16px">
        <div style="display:flex;justify-content:space-between;padding:4px 0"><span>Subtotal</span><span>₹${order.subtotal.toLocaleString('en-IN')}</span></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0"><span>Shipping</span><span>${order.shippingCost === 0 ? 'Free' : '₹' + order.shippingCost}</span></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0"><span>Tax</span><span>₹${order.tax.toLocaleString('en-IN')}</span></div>
        ${order.discount > 0 ? `<div style="display:flex;justify-content:space-between;padding:4px 0;color:#10b981"><span>Discount</span><span>-₹${order.discount.toLocaleString('en-IN')}</span></div>` : ''}
        <div style="display:flex;justify-content:space-between;padding:8px 0;font-weight:bold;font-size:18px;border-top:2px solid #eee;margin-top:8px"><span>Total</span><span>₹${order.total.toLocaleString('en-IN')}</span></div>
      </div>
      <div style="background:#f8fafc;border-radius:8px;padding:16px;margin-top:24px">
        <h4 style="margin:0 0 8px">Shipping Address</h4>
        <p style="margin:0;color:#666">${order.shipping.fullName}<br>${order.shipping.address}<br>${order.shipping.city}, ${order.shipping.state} - ${order.shipping.pincode}<br>Phone: ${order.shipping.phone}</p>
      </div>
      <p style="text-align:center;color:#999;font-size:12px;margin-top:32px">Payment: ${order.payment.method === 'cod' ? 'Cash on Delivery' : 'Online'} — ${order.payment.status}</p>
    </div>
    <div style="background:#f8fafc;padding:16px;text-align:center;color:#999;font-size:11px">© ${new Date().getFullYear()} AshMart. All rights reserved.</div>
  </div>`;
}

function orderShipped(order) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff">
    <div style="background:#2563EB;padding:24px;text-align:center">
      <h1 style="color:#fff;margin:0;font-size:24px">AshMart</h1>
    </div>
    <div style="padding:32px;text-align:center">
      <h2 style="color:#1a1a2e">Your Order is on the way! 🚚</h2>
      <p style="color:#666">Order <strong>#${order.orderNumber}</strong> has been shipped.</p>
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:24px 0">
        <p style="margin:0;color:#166534">Expected delivery: <strong>3-7 business days</strong></p>
      </div>
      <p style="color:#666;font-size:13px">We'll notify you again when your order is delivered.</p>
    </div>
    <div style="background:#f8fafc;padding:16px;text-align:center;color:#999;font-size:11px">© ${new Date().getFullYear()} AshMart. All rights reserved.</div>
  </div>`;
}

function orderDelivered(order) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff">
    <div style="background:#10b981;padding:24px;text-align:center">
      <h1 style="color:#fff;margin:0;font-size:24px">AshMart</h1>
    </div>
    <div style="padding:32px;text-align:center">
      <h2 style="color:#1a1a2e">Order Delivered! 🎉</h2>
      <p style="color:#666">Your order <strong>#${order.orderNumber}</strong> has been delivered successfully.</p>
      <p style="color:#666">We hope you love your purchase. Please leave a review!</p>
      <a href="#" style="display:inline-block;background:#2563EB;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;margin-top:16px">Rate Your Order</a>
    </div>
    <div style="background:#f8fafc;padding:16px;text-align:center;color:#999;font-size:11px">© ${new Date().getFullYear()} AshMart. All rights reserved.</div>
  </div>`;
}

module.exports = { sendEmail, orderConfirmation, orderShipped, orderDelivered };
