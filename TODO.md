# TODO - Maruhsoft Marketplace

## Step 1: Environment readiness
- [x] Determine available package runner (npm/pnpm/yarn) and Node availability.

## Step 2: Complete codebase review
- [x] Read app layout and core pages (home/cart/checkout/auth).
- [x] Read backend API routes for auth/products/orders/payments.
- [x] Read root-provider, header/footer, and migrations schema.

## Step 3: Replace mocked backend with real DB/auth stack
- [ ] Implement D1/Drizzle connection in src/lib/db.ts and expose it to route handlers.
- [ ] Replace auth endpoints to use Lucia + argon2 + users table + user_session table.
- [ ] Replace products endpoint to query products/categories from DB.
- [ ] Replace orders endpoint to persist orders + order_items and fetch by authenticated user.
- [ ] Replace payments endpoint to persist payment attempt and update order status.

## Step 4: Fix broken navigation/route gaps
- [ ] Add /dashboard route (currently redirects to a non-existent page).
- [ ] Wire cart/checkout pages to real cart/order creation APIs (instead of hardcoded items and step-only UI).

## Step 5: Run & verify
- [ ] Run type-check/lint/build.
- [ ] Start dev server and verify end-to-end flow.

