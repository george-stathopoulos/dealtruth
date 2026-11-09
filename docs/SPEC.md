# DealTruth — product specification v0.2

## Goal
Make global shopping deals transparent. Evaluate the actual delivered price of an exact product, not a retailer's advertised discount. Designed for Black Friday and everyday shopping.

## Core journey
Guest enters retailer URL or exact product model, confirms variant, chooses delivery country/postal code, sees comparable sellers with product price, shipping, tax/duties, mandatory fees, eligible discounts and delivered total. Evidence is timestamped and attributed. Optional Google login saves delivery profiles, watchlist and alerts.

## Important invariants
- Compare only identical SKU/GTIN/variant, condition, quantity, delivery eligibility, declared destination and currency converted at a known exchange rate.
- Landed total = product subtotal + shipping + additional tax + duties + clearance/mandatory charges - eligible discounts. VAT already included must not be counted twice.
- Tax/duty estimates depend on origin, destination, category/HS code, declared value and DDP/DAP terms. Distinguish verified, estimated and unknown; no unknown becomes zero.
- Ranking must clearly distinguish independently verified quotes, user-attested quotes and incomplete/estimated costs. User-attested is NOT independently verified.
- Shipping spikes are risk signals, not proof of deceptive conduct. Show comparable evidence and dates.
- A missing historical observation is not zero. Show sample count and observation coverage.
- 30/90/180/365-day history only when there are real timestamped source observations. Wayback is optional secondary evidence.
- Currency conversions need rate, timestamp, provider and any spread; stale/unknown FX blocks definitive ranking.
- Checkout may change prices and totals; disclose quote timestamp and refresh status.

## Screens
1. Home/search; guest access by default.
2. Product confirmation and exact variant matching.
3. Destination country/postal and delivery method; optional multiple saved profiles.
4. International offers sorted by landed cost; detail breakdown, ETA, warranty/returns and evidence.
5. Historical product and delivered cost charts; shipping-fee anomalies; warnings.
6. Account with Google OAuth, saved destinations, watchlists, alerts, export/delete.
7. Empty/loading/error/insufficient-evidence and unavailable-country states.

## MVP acceptance criteria
- Installable responsive PWA, touch-friendly forms and mobile navigation.
- Costs sum accurately; unknown components never default to zero; same destination and currency enforced.
- Confidence levels are honest; only truly sourced values can be independently verified.
- No fabricated product, retailer, price, history or estimated landed-cost claims.
- URL input must not claim extraction until one authorized source is connected and tested.
- Server-backed features require Google OAuth secure cookies, per-user access control, rate limiting, validation and account data deletion.
- Tests pass, CI passes and production endpoint is manually smoke-tested before marking release ready.

## Data and architecture
Static GitHub Pages preview has no account, dynamic API, third-party tokens or database. Next stage: Worker + D1; Google Authorization Code + PKCE, state/nonce, HttpOnly session cookies, server-side credential storage; tables for users, sessions, locations, canonical products and variants, merchants, offers, quote evidence, observations, FX, watchlists, alerts and jobs.

## Explicitly out of scope of initial preview
Live retailer integration, bulk scraping, international FX conversions, tax quotes, Google login, automated archive extraction and alerts.
