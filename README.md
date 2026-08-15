# Premium Game Shop

A premium digital gaming store built with vanilla HTML/CSS/JS + Supabase.

## Setup

1. Create a Supabase project at https://supabase.com
2. Run `schema.sql` in Supabase SQL editor
3. Copy `.env.example` to `.env` and fill in Supabase URL and anon key
4. Host on GitHub Pages or Netlify/Vercel
5. For admin, insert your user ID into `admin_users` table:
   `insert into admin_users (user_id, role) values ('your-user-id', 'admin');`

## Features Implemented

- Shop open/closed system based on time
- Supabase Authentication (Email + Google + Facebook)
- Product listing from database
- Dynamic checkout with required fields
- Manual payment flow (screenshot upload)
- Admin dashboard (basic CRUD)
- Order tracking placeholder

## Next Steps

- Implement full payment verification workflow
- Add email notifications
- Enhance admin UI
- Add order timeline visualization
- Integrate real payment gateway (Stripe, KBZPay, etc.)
