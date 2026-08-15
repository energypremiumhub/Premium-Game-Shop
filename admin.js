// admin.js
import { supabase } from './supabase.js';

// Check admin
async function checkAdmin() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) { location.href = '/'; return; }
  const { data: admin } = await supabase.from('admin_users').select('*').eq('user_id', session.user.id).single();
  if (!admin) { location.href = '/'; }
}

// Load shop settings
async function loadShopSettings() {
  const { data } = await supabase.from('shop_settings').select('*').single();
  document.getElementById('openTime').value = data.opening_time;
  document.getElementById('closeTime').value = data.closing_time;
}

document.getElementById('saveHours').addEventListener('click', async () => {
  const open = document.getElementById('openTime').value;
  const close = document.getElementById('closeTime').value;
  await supabase.from('shop_settings').update({ opening_time: open, closing_time: close }).eq('id', 1);
  alert('Saved');
});

// Product CRUD (simplified)
async function loadAdminProducts() {
  const { data } = await supabase.from('products').select('*');
  document.getElementById('adminProductList').innerHTML = data.map(p => `
    <div class="product-card">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="editProduct('${p.id}')">Edit</button>
      <button onclick="deleteProduct('${p.id}')">Delete</button>
    </div>
  `).join('');
}

window.deleteProduct = async (id) => {
  if (!confirm('Delete?')) return;
  await supabase.from('products').delete().eq('id', id);
  loadAdminProducts();
};

// Orders
async function loadOrders() {
  const { data } = await supabase.from('orders').select('*, payments(*)');
  document.getElementById('adminOrderList').innerHTML = data.map(o => `
    <div>
      <strong>${o.order_number}</strong> – ${o.status} – $${o.total_amount}
      <button onclick="changeOrderStatus('${o.id}', 'processing')">Processing</button>
      <button onclick="changeOrderStatus('${o.id}', 'completed')">Complete</button>
    </div>
  `).join('');
}

window.changeOrderStatus = async (id, status) => {
  await supabase.from('orders').update({ status }).eq('id', id);
  loadOrders();
};

checkAdmin();
loadShopSettings();
loadAdminProducts();
loadOrders();
