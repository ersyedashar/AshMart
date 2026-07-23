(() => {
  const BASE = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://ashmart-api.onrender.com/api';
  let token = localStorage.getItem('am_admin_token') || null;
  let adminUser = null;
  let currentOrderPage = 1;
  let currentProductPage = 1;

  function escapeHtml(str) { if (!str) return ''; return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

  async function req(endpoint, opts = {}) {
    const h = { 'Content-Type': 'application/json', ...opts.headers };
    if (token) h['Authorization'] = 'Bearer ' + token;
    const res = await fetch(BASE + endpoint, { ...opts, headers: h });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
  }

  function toast(msg, type = 'success') {
    const t = document.createElement('div');
    t.className = 'toast' + (type === 'error' ? ' error' : '');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  function fmt(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
  function fmtDate(d) { return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); }

  /* ===== AUTH ===== */
  const loginView = document.getElementById('loginView');
  const dashboardView = document.getElementById('dashboardView');

  function showDashboard() {
    loginView.style.display = 'none';
    dashboardView.style.display = 'flex';
    document.getElementById('adminName').textContent = adminUser ? adminUser.name : '';
    loadStats();
  }

  function showLogin() {
    loginView.style.display = 'flex';
    dashboardView.style.display = 'none';
  }

  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;
    const errEl = document.getElementById('loginError');
    try {
      const data = await req('/auth/login', { method: 'POST', body: JSON.stringify({ email, password: pass }) });
      if (data.user.role !== 'admin') { errEl.textContent = 'Not an admin account'; errEl.style.display = 'block'; return; }
      token = data.token;
      adminUser = data.user;
      localStorage.setItem('am_admin_token', token);
      localStorage.setItem('am_admin_user', JSON.stringify(data.user));
      showDashboard();
    } catch (err) { errEl.textContent = err.message; errEl.style.display = 'block'; }
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    token = null; adminUser = null;
    localStorage.removeItem('am_admin_token');
    localStorage.removeItem('am_admin_user');
    showLogin();
  });

  /* ===== NAV ===== */
  document.querySelectorAll('.nav-item[data-panel]').forEach(nav => {
    nav.addEventListener('click', () => {
      document.querySelectorAll('.nav-item[data-panel]').forEach(n => n.classList.remove('active'));
      nav.classList.add('active');
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      document.getElementById(nav.dataset.panel).classList.add('active');
      if (nav.dataset.panel === 'overview') loadStats();
      if (nav.dataset.panel === 'orders') loadOrders();
      if (nav.dataset.panel === 'products') loadProducts();
      if (nav.dataset.panel === 'users') loadUsers();
    });
  });

  /* ===== DASHBOARD ===== */
  let revenueChartInstance = null;
  let categoryChartInstance = null;

  async function loadStats() {
    try {
      const res = await req('/admin/stats');
      const s = res.stats;
      document.getElementById('statRevenue').textContent = fmt(s.totalRevenue);
      document.getElementById('statOrders').textContent = s.totalOrders;
      document.getElementById('statProducts').textContent = s.totalProducts;
      document.getElementById('statUsers').textContent = s.totalUsers;

      const statusEl = document.getElementById('statusBreakdown');
      const statuses = ['placed', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];
      statusEl.innerHTML = statuses.map(st => {
        const count = s.ordersByStatus[st] || 0;
        return '<div style="flex:1;min-width:120px;padding:12px;background:var(--bg);border-radius:8px;text-align:center"><div style="font-size:24px;font-weight:700">' + count + '</div><div style="font-size:12px;color:var(--text2);text-transform:capitalize">' + st + '</div></div>';
      }).join('');

      const tbody = document.getElementById('recentOrdersBody');
      if (!s.recentOrders.length) { tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text2);padding:24px">No orders yet</td></tr>'; return; }
      tbody.innerHTML = s.recentOrders.map(o => '<tr><td style="font-weight:600">#' + escapeHtml(o.orderNumber) + '</td><td>' + escapeHtml(o.user ? o.user.name : 'N/A') + '</td><td>' + fmt(o.total) + '</td><td><span class="badge badge-' + escapeHtml(o.status) + '">' + escapeHtml(o.status) + '</span></td><td>' + fmtDate(o.createdAt) + '</td></tr>').join('');

      loadRevenueChart();
    } catch (e) { toast(e.message, 'error'); }
  }

  async function loadRevenueChart() {
    try {
      const res = await req('/admin/revenue-chart?days=30');
      if (typeof Chart === 'undefined') return;

      if (revenueChartInstance) revenueChartInstance.destroy();
      if (categoryChartInstance) categoryChartInstance.destroy();

      const labels = res.dailyRevenue.map(d => { const dt = new Date(d._id); return dt.getDate() + '/' + (dt.getMonth()+1); });
      const revenues = res.dailyRevenue.map(d => d.revenue);
      const orderCounts = res.dailyRevenue.map(d => d.orders);

      revenueChartInstance = new Chart(document.getElementById('revenueChart'), {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: 'Revenue (₹)', data: revenues, borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.1)', fill: true, tension: 0.4 },
            { label: 'Orders', data: orderCounts, borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', fill: true, tension: 0.4, yAxisID: 'y1' }
          ]
        },
        options: {
          responsive: true,
          interaction: { intersect: false, mode: 'index' },
          scales: {
            y: { beginAtZero: true, ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
            y1: { beginAtZero: true, position: 'right', ticks: { color: '#94a3b8' }, grid: { display: false } },
            x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } }
          },
          plugins: { legend: { labels: { color: '#f1f5f9' } } }
        }
      });

      if (res.categoryRevenue.length) {
        const catLabels = res.categoryRevenue.map(c => c._id || 'Uncategorized');
        const catRevenues = res.categoryRevenue.map(c => c.revenue);
        const catColors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6', '#ec4899'];
        categoryChartInstance = new Chart(document.getElementById('categoryChart'), {
          type: 'doughnut',
          data: {
            labels: catLabels,
            datasets: [{ data: catRevenues, backgroundColor: catColors.slice(0, catLabels.length) }]
          },
          options: {
            responsive: true,
            plugins: { legend: { position: 'bottom', labels: { color: '#f1f5f9', padding: 12 } } }
          }
        });
      }

      if (res.topProducts.length) {
        const topEl = document.getElementById('topProductsBody');
        if (topEl.tagName === 'TBODY') {
          topEl.innerHTML = res.topProducts.map(p => '<tr><td style="font-weight:500">' + escapeHtml(p._id) + '</td><td>' + p.totalSold + '</td><td>' + fmt(p.revenue) + '</td></tr>').join('');
        }
      }
    } catch (e) { /* charts are optional */ }
  }

  /* ===== ORDERS ===== */
  async function loadOrders(page = 1) {
    currentOrderPage = page;
    const status = document.getElementById('orderFilter').value;
    try {
      const res = await req('/admin/orders?page=' + page + '&limit=15' + (status ? '&status=' + status : ''));
      const tbody = document.getElementById('ordersTableBody');
      if (!res.orders.length) { tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;color:var(--text2);padding:24px">No orders found</td></tr>'; return; }
      tbody.innerHTML = res.orders.map(o => {
        const trackingCell = o.tracking?.trackingNumber
          ? '<span style="font-size:11px;color:var(--info)"><i class="fas fa-truck"></i> ' + escapeHtml(o.tracking.carrier || '') + '<br>' + escapeHtml(o.tracking.trackingNumber) + '</span>'
          : '<span style="color:var(--text2);font-size:11px">—</span>';
        return '<tr><td style="font-weight:600">#' + escapeHtml(o.orderNumber) + '</td><td>' + escapeHtml(o.user ? o.user.name : 'N/A') + '<br><span style="font-size:11px;color:var(--text2)">' + escapeHtml(o.user ? o.user.email : '') + '</span></td><td>' + o.items.length + ' item(s)</td><td>' + fmt(o.total) + '</td><td>' + (o.payment.method === 'cod' ? 'COD' : 'Online') + '</td><td>' + trackingCell + '</td><td><span class="badge badge-' + escapeHtml(o.status) + '">' + escapeHtml(o.status) + '</span></td><td>' + fmtDate(o.createdAt) + '</td><td><button class="btn btn-outline btn-sm update-status-btn" data-id="' + o._id + '" data-status="' + escapeHtml(o.status) + '"><i class="fas fa-edit"></i></button></td></tr>';
      }).join('');

      document.querySelectorAll('.update-status-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.getElementById('statusOrderId').value = btn.dataset.id;
          document.getElementById('newStatus').value = btn.dataset.status;
          document.getElementById('statusModal').classList.add('show');
        });
      });

      const pag = document.getElementById('ordersPagination');
      if (res.pages > 1) {
        let html = '';
        for (let i = 1; i <= res.pages; i++) html += '<button class="btn btn-outline btn-sm' + (i === page ? ' btn-primary' : '') + '" data-action="load-orders" data-page="' + i + '">' + i + '</button>';
        pag.innerHTML = html;
      } else { pag.innerHTML = ''; }
    } catch (e) { toast(e.message, 'error'); }
  }
  window._loadOrders = loadOrders;

  document.getElementById('orderFilter').addEventListener('change', () => loadOrders(1));

  document.getElementById('saveStatusBtn').addEventListener('click', async () => {
    const id = document.getElementById('statusOrderId').value;
    const status = document.getElementById('newStatus').value;
    const body = { status };
    if (status === 'shipped') {
      body.carrier = document.getElementById('trackingCarrier').value;
      body.trackingNumber = document.getElementById('trackingNumber').value;
      body.trackingUrl = document.getElementById('trackingUrl').value;
      body.estimatedDelivery = document.getElementById('trackingEta').value || undefined;
    }
    try {
      await req('/admin/orders/' + id + '/status', { method: 'PUT', body: JSON.stringify(body) });
      document.getElementById('statusModal').classList.remove('show');
      toast('Order status updated');
      loadOrders(currentOrderPage);
    } catch (e) { toast(e.message, 'error'); }
  });

  document.getElementById('cancelStatusBtn').addEventListener('click', () => document.getElementById('statusModal').classList.remove('show'));
  document.getElementById('closeStatusModal').addEventListener('click', () => document.getElementById('statusModal').classList.remove('show'));

  document.getElementById('newStatus').addEventListener('change', function() {
    document.getElementById('trackingFields').style.display = this.value === 'shipped' ? 'block' : 'none';
  });

  /* ===== PRODUCTS ===== */
  async function loadProducts(page = 1) {
    currentProductPage = page;
    try {
      const res = await req('/admin/products?page=' + page + '&limit=15');
      const tbody = document.getElementById('productsTableBody');
      if (!res.products.length) { tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text2);padding:24px">No products found</td></tr>'; return; }
      tbody.innerHTML = res.products.map(p => '<tr><td><img src="' + escapeHtml(p.image) + '" class="product-thumb"></td><td style="font-weight:500">' + escapeHtml(p.title) + '</td><td style="text-transform:capitalize">' + escapeHtml(p.category) + '</td><td>' + fmt(p.price) + '</td><td>' + (p.stock || 0) + '</td><td>' + (p.featured ? '<span style="color:var(--success)"><i class="fas fa-check-circle"></i></span>' : '<span style="color:var(--text2)"><i class="fas fa-times-circle"></i></span>') + '</td><td><button class="btn btn-outline btn-sm edit-product-btn" data-id="' + p._id + '"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-sm delete-product-btn" data-id="' + p._id + '"><i class="fas fa-trash"></i></button></td></tr>').join('');

      document.querySelectorAll('.edit-product-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          try {
            const res = await req('/products/' + btn.dataset.id);
            const p = res.product || res;
            document.getElementById('pfId').value = p._id;
            document.getElementById('pfTitle').value = p.title;
            document.getElementById('pfCategory').value = p.category;
            document.getElementById('pfBadge').value = p.badge || '';
            document.getElementById('pfPrice').value = p.price;
            document.getElementById('pfOriginalPrice').value = p.originalPrice || '';
            document.getElementById('pfStock').value = p.stock || 100;
            document.getElementById('pfFeatured').value = p.featured ? 'true' : 'false';
            document.getElementById('pfImage').value = p.image;
            document.getElementById('pfDescription').value = p.description;
            document.getElementById('productModalTitle').textContent = 'Edit Product';
            document.getElementById('productModal').classList.add('show');
          } catch (e) { toast(e.message, 'error'); }
        });
      });

      document.querySelectorAll('.delete-product-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (!confirm('Delete this product?')) return;
          try {
            await req('/admin/products/' + btn.dataset.id, { method: 'DELETE' });
            toast('Product deleted');
            loadProducts(currentProductPage);
          } catch (e) { toast(e.message, 'error'); }
        });
      });

      const pag = document.getElementById('productsPagination');
      if (res.pages > 1) {
        let html = '';
        for (let i = 1; i <= res.pages; i++) html += '<button class="btn btn-outline btn-sm' + (i === page ? ' btn-primary' : '') + '" data-action="load-products" data-page="' + i + '">' + i + '</button>';
        pag.innerHTML = html;
      } else { pag.innerHTML = ''; }
    } catch (e) { toast(e.message, 'error'); }
  }
  window._loadProducts = loadProducts;

  document.getElementById('addProductBtn').addEventListener('click', () => {
    document.getElementById('pfId').value = '';
    document.getElementById('productForm').reset();
    document.getElementById('productModalTitle').textContent = 'Add Product';
    document.getElementById('productModal').classList.add('show');
  });

  document.getElementById('saveProductBtn').addEventListener('click', async () => {
    const id = document.getElementById('pfId').value;
    const body = {
      title: document.getElementById('pfTitle').value,
      category: document.getElementById('pfCategory').value,
      badge: document.getElementById('pfBadge').value,
      badgeText: document.getElementById('pfBadge').selectedOptions[0]?.text || '',
      price: Number(document.getElementById('pfPrice').value),
      originalPrice: Number(document.getElementById('pfOriginalPrice').value) || undefined,
      stock: Number(document.getElementById('pfStock').value),
      featured: document.getElementById('pfFeatured').value === 'true',
      image: document.getElementById('pfImage').value,
      description: document.getElementById('pfDescription').value
    };
    try {
      if (id) { await req('/admin/products/' + id, { method: 'PUT', body: JSON.stringify(body) }); }
      else { await req('/admin/products', { method: 'POST', body: JSON.stringify(body) }); }
      document.getElementById('productModal').classList.remove('show');
      toast(id ? 'Product updated' : 'Product created');
      loadProducts(currentProductPage);
    } catch (e) { toast(e.message, 'error'); }
  });

  document.getElementById('cancelProductBtn').addEventListener('click', () => document.getElementById('productModal').classList.remove('show'));
  document.getElementById('closeProductModal').addEventListener('click', () => document.getElementById('productModal').classList.remove('show'));

  /* ===== USERS ===== */
  async function loadUsers() {
    try {
      const res = await req('/admin/users');
      const tbody = document.getElementById('usersTableBody');
      if (!res.users.length) { tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text2);padding:24px">No users found</td></tr>'; return; }
      tbody.innerHTML = res.users.map(u => '<tr><td style="font-weight:500">' + escapeHtml(u.name) + '</td><td>' + escapeHtml(u.email) + '</td><td>' + escapeHtml(u.phone || '-') + '</td><td><span class="badge badge-' + (u.role === 'admin' ? 'confirmed' : 'placed') + '">' + escapeHtml(u.role) + '</span></td><td>' + fmtDate(u.createdAt) + '</td></tr>').join('');
    } catch (e) { toast(e.message, 'error'); }
  }

  /* ===== INIT ===== */
  document.body.addEventListener('click', function(e) {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const page = parseInt(el.dataset.page);
    if (el.dataset.action === 'load-orders' && page) loadOrders(page);
    if (el.dataset.action === 'load-products' && page) loadProducts(page);
  });

  const savedUser = localStorage.getItem('am_admin_user');
  if (token && savedUser) {
    try { adminUser = JSON.parse(savedUser); showDashboard(); } catch { showLogin(); }
  }
})();
