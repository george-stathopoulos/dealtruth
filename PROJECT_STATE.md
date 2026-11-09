# DealTruth — project state

## Objective
Universal product URL + delivery destination -> accurate identity matching, real retailer offers, delivered-price comparisons, historical evidence. No manual seller entry.

## Implemented
- GitHub Pages URL-first frontend and Cloudflare Worker deployed in earlier milestone.
- Generic schema.org JSON-LD product/offer parser with brand, SKU, MPN, GTIN and multiple offers.
- Normalized offer model, destination input and null-by-default shipping/taxes/duties/fees. No delivered-price ranking without complete costs.
- Optional Skroutz/API.SH provider adapter; requires private provider credentials and validation.
- Unit tests for multi-offer parsing, unknown prices and international currency separation.
- Worker fetch timeout and streamed response byte limit.
- International architecture documented at docs/INTERNATIONAL_ARCHITECTURE.md.

## Current verification
Latest commits pushed; current GitHub Actions and production smoke test pending. Earlier frontend and Worker deployments passed. Do not claim the latest changes are live until verified.

## Not yet implemented
- Universal retailer discovery and exact variant matching across sources.
- Authorized multi-country merchant feeds, live shipping/checkout/import quotes and FX conversions.
- Price history, Google login, saved address and alerts.
- Production security hardening including DNS-level SSRF mitigation and rate limiting.

## Release gate
At least three independent retailer domains and multiple countries, verified real seller offers and destination quotes, correct product identity, full CI, live production smoke test. The current app is not a complete MVP.

## Next
Verify latest CI and production; then select and validate permitted international retailer/merchant feeds, shipping and tax providers before claiming global comparison.
