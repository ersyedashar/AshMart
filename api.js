/* ===== AshMart API Client ===== */
const API = (() => {
  const BASE = window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api'
    : '/api';

  let token = localStorage.getItem('am_token') || null;
  let user = null;

  async function request(endpoint, options = {}) {
    const url = BASE + endpoint;
    const headers = { 'Content-Type': 'application/json', ...options.headers };
    if (token) headers['Authorization'] = 'Bearer ' + token;
    try {
      const res = await fetch(url, { ...options, headers });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Request failed');
      return data;
    } catch (err) {
      if (err.message === 'Token invalid' || err.message === 'Not authorized') {
        token = null; user = null;
        localStorage.removeItem('am_token');
      }
      throw err;
    }
  }

  return {
    setToken(t) { token = t; if (t) localStorage.setItem('am_token', t); else localStorage.removeItem('am_token'); },
    getToken() { return token; },
    setUser(u) { user = u; },
    getUser() { return user; },
    isLoggedIn() { return !!token && !!user; },

    async register(name, email, phone, password) {
      const data = await request('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, phone, password }) });
      this.setToken(data.token); this.setUser(data.user);
      localStorage.setItem('am_user', JSON.stringify(data.user));
      return data;
    },

    async login(email, password) {
      const data = await request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      this.setToken(data.token); this.setUser(data.user);
      localStorage.setItem('am_user', JSON.stringify(data.user));
      return data;
    },

    async getMe() {
      const data = await request('/auth/me');
      this.setUser(data.user);
      localStorage.setItem('am_user', JSON.stringify(data.user));
      return data;
    },

    async getProducts(params = {}) {
      const qs = new URLSearchParams(params).toString();
      return request('/products' + (qs ? '?' + qs : ''));
    },

    async getProduct(id) {
      return request('/products/' + id);
    },

    async createOrder(orderData) {
      return request('/orders', { method: 'POST', body: JSON.stringify(orderData) });
    },

    async getMyOrders() {
      return request('/orders/my');
    },

    async createRazorpayOrder(amount, orderId) {
      return request('/payment/create-order', { method: 'POST', body: JSON.stringify({ amount, orderId }) });
    },

    async verifyPayment(data) {
      return request('/payment/verify', { method: 'POST', body: JSON.stringify(data) });
    },

    async getRazorpayKey() {
      return request('/payment/key');
    },

    logout() {
      token = null; user = null;
      localStorage.removeItem('am_token');
      localStorage.removeItem('am_user');
    },

    loadFromStorage() {
      try {
        const u = localStorage.getItem('am_user');
        if (u && token) { user = JSON.parse(u); return true; }
      } catch {}
      return false;
    }
  };
})();

window.API = API;
