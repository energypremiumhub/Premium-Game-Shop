import { supabase } from './supabase.js';

// Shop status
async function checkShopStatus() {
  const { data, error } = await supabase
    .from('shop_settings')
    .select('opening_time, closing_time, auto_status')
    .single();
  if (error) return;
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  const openTime = parseInt(data.opening_time.split(':')[0]) * 60 + parseInt(data.opening_time.split(':')[1]);
  const closeTime = parseInt(data.closing_time.split(':')[0]) * 60 + parseInt(data.closing_time.split(':')[1]);
  const isOpen = data.auto_status && currentTime >= openTime && currentTime <= closeTime;
  document.getElementById('shopStatus').classList.toggle('closed', !isOpen);
  document.getElementById('shopStatusText').textContent = isOpen ? '🟢 SHOP OPEN' : '🔴 SHOP CLOSED';
  document.getElementById('shopHoursText').textContent = `Business hours: ${data.opening_time} – ${data.closing_time}`;
}

// Fetch categories
async function loadCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('display_order');
  if (error) return;
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = data.map(cat => `
    <div class="feature-card">
      <div style="font-size:2rem">${cat.icon || '🎮'}</div>
      <h3>${cat.name}</h3>
    </div>
  `).join('');
}

// Fetch products
let currentProducts = [];
async function loadProducts(categorySlug = null) {
  let query = supabase.from('products').select('*').eq('is_active', true);
  if (categorySlug) {
    const { data: cat } = await supabase.from('categories').select('id').eq('slug', categorySlug).single();
    if (cat) query = query.eq('category_id', cat.id);
  }
  const { data, error } = await query;
  if (error) return;
  currentProducts = data;
  renderProducts(data);
}

function renderProducts(products) {
  const grid = document.getElementById('productGrid');
  if (!products.length) {
    grid.innerHTML = '<p class="text-muted">No products found.</p>';
    return;
  }
  grid.innerHTML = products.map(p => `
    <div class="product-card" onclick="openCheckout('${p.id}')">
      ${p.image_url ? `<img src="${p.image_url}" alt="${p.name}" />` : '<div style="height:160px;background:var(--bg-secondary);border-radius:12px"></div>'}
      <h3>${p.name}</h3>
      <p class="text-muted">${p.description || ''}</p>
      <div class="product-price">$${p.price}</div>
    </div>
  `).join('');
}

// Auth
let authMode = 'login';
document.getElementById('authBtn').addEventListener('click', () => {
  document.getElementById('authModal').classList.add('open');
});
document.getElementById('closeAuth').addEventListener('click', () => {
  document.getElementById('authModal').classList.remove('open');
});
document.querySelectorAll('.auth-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.auth-tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    authMode = tab.dataset.tab;
    document.getElementById('authTitle').textContent = authMode === 'login' ? 'Login' : 'Register';
    document.getElementById('phoneGroup').style.display = authMode === 'register' ? 'block' : 'none';
  });
});

document.getElementById('authForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('authEmail').value;
  const password = document.getElementById('authPassword').value;
  if (authMode === 'login') {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else location.reload();
  } else {
    const phone = document.getElementById('authPhone').value;
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { phone } } });
    if (error) alert(error.message);
    else alert('Registration successful! Check your email.');
  }
});

// Checkout
window.openCheckout = async (productId) => {
  const { data: product } = await supabase.from('products').select('*').eq('id', productId).single();
  if (!product) return;
  // Check shop open
  const statusText = document.getElementById('shopStatusText').textContent;
  if (statusText.includes('CLOSED')) {
    alert('Shop is currently closed. You can browse but cannot place orders.');
    return;
  }
  document.getElementById('checkoutModal').classList.add('open');
  document.getElementById('checkoutProductInfo').innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
  `;
  // Dynamic fields
  const fieldsDiv = document.getElementById('checkoutFields');
  fieldsDiv.innerHTML = '';
  const required = product.required_fields || [];
  required.forEach(field => {
    const label = field.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    fieldsDiv.innerHTML += `
      <div class="form-group">
        <label>${label}</label>
        <input type="text" data-field="${field}" required />
      </div>
    `;
  });
  // Payment methods
  const { data: methods } = await supabase.from('payment_methods').select('*').eq('is_active', true);
  const select = document.getElementById('paymentMethodSelect');
  select.innerHTML = methods.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
};

document.getElementById('submitOrder').addEventListener('click', async () => {
  // Gather data, insert order, payment
  // Simplified: insert order with status 'pending', then payment
});

// Order tracking
async function trackOrder(orderNumber) {
  const { data, error } = await supabase
    .from('orders')
    .select('*, order_items(*), payments(*)')
    .eq('order_number', orderNumber)
    .single();
  if (error) return alert('Order not found');
  // display status timeline
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  checkShopStatus();
  loadCategories();
  loadProducts();
  // check user session
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      document.getElementById('authBtn').textContent = 'Logout';
      document.getElementById('authBtn').onclick = () => supabase.auth.signOut().then(() => location.reload());
    }
  });
});
