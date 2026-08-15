-- Enable extensions
create extension if not exists "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text,
  phone text,
  avatar_url text,
  social_accounts jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- Categories
create table public.categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  icon text,
  display_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- Products
create table public.products (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  slug text unique not null,
  description text,
  image_url text,
  price numeric(10,2) not null,
  sale_price numeric(10,2),
  currency text default 'USD',
  delivery_method text,
  required_fields jsonb default '[]'::jsonb, -- e.g. ["user_id","server_id"]
  is_active boolean default true,
  stock int default -1, -- -1 = unlimited
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Payment methods
create table public.payment_methods (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text not null, -- bank_transfer, mobile_wallet, qr
  account_info jsonb,
  qr_code_url text,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- Orders
create table public.orders (
  id uuid primary key default uuid_generate_v4(),
  order_number text unique not null,
  user_id uuid references auth.users(id) on delete set null,
  status text not null default 'pending',
  -- pending, payment_submitted, payment_verifying, processing, completed, cancelled, refunded
  total_amount numeric(10,2) not null,
  payment_method_id uuid references public.payment_methods(id) on delete set null,
  delivery_info jsonb default '{}'::jsonb,
  admin_notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Order items
create table public.order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  quantity int not null default 1,
  unit_price numeric(10,2) not null,
  total_price numeric(10,2) not null,
  created_at timestamptz default now()
);

-- Payments (manual verification)
create table public.payments (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid references public.orders(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  payment_method_id uuid references public.payment_methods(id) on delete set null,
  amount numeric(10,2) not null,
  transaction_ref text,
  screenshot_url text,
  status text default 'submitted',
  -- submitted, approved, rejected, additional_info_requested
  admin_note text,
  created_at timestamptz default now()
);

-- Notifications
create table public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  message text,
  is_read boolean default false,
  created_at timestamptz default now()
);

-- Shop settings
create table public.shop_settings (
  id serial primary key,
  opening_time time not null default '09:00',
  closing_time time not null default '21:00',
  auto_status boolean default true,
  updated_at timestamptz default now()
);

-- Admin users (role)
create table public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text default 'admin',
  created_at timestamptz default now()
);

-- Insert default categories
insert into public.categories (name, slug, icon) values
('Mobile Legends', 'mobile-legends', '🎮'),
('Magic Chess', 'magic-chess', '♟️'),
('PUBG Mobile', 'pubg-mobile', '🎯'),
('Telegram Services', 'telegram-services', '✈️');

-- Insert default shop settings
insert into public.shop_settings (opening_time, closing_time) values ('09:00', '21:00');

-- RLS policies (basic)
alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payments enable row level security;
alter table public.notifications enable row level security;
alter table public.shop_settings enable row level security;
alter table public.admin_users enable row level security;

-- Profiles: users can read/update own profile
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Products: public read, admin write (simplify)
create policy "Anyone can view active products" on public.products for select using (is_active = true);
create policy "Admins can manage products" on public.products for all using (exists (select 1 from public.admin_users where user_id = auth.uid()));

-- Orders: user can view own orders, admin can view all
create policy "Users can view own orders" on public.orders for select using (auth.uid() = user_id);
create policy "Users can insert orders" on public.orders for insert with check (auth.uid() = user_id);
create policy "Admins can view all orders" on public.orders for select using (exists (select 1 from public.admin_users where user_id = auth.uid()));

-- Similar policies for payments, notifications etc. (abbreviated)
