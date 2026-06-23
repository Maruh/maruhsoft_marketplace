# TODO - Maruhsoft Marketplace review & improvements

## Step 1: Environment readiness
- [x] Determine available package runner (npm/pnpm/yarn)
  - [ ] npm unavailable in this terminal environment ("npm: command not found"); confirm correct runner (pnpm/yarn) and Node availability.


## Step 2: Complete codebase review
- [ ] Read remaining app pages and API routes not yet inspected (cart/product cards/any missing routes)
- [ ] Verify how/if RootProvider is mounted

## Step 3: Replace mocked backend with real DB/auth stack
- [ ] Implement real product listing/detail endpoints using DB
- [ ] Implement real auth (register/login/logout) using Lucia sessions + D1
- [ ] Implement real orders persistence
- [ ] Implement real payments handling (at minimum: integrate provider or store payment intents/state)

## Step 4: Fix broken navigation/route gaps
- [ ] Add missing pages (e.g. /dashboard) or adjust redirects
- [ ] Wire cart/checkout UI to actual cart/order APIs

## Step 5: Run & verify
- [ ] Run type-check/lint/build
- [ ] Start dev server and verify critical flows: register→login→browse→cart→checkout→payment→order confirmation

