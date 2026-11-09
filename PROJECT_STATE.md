# DealTruth project state — 2026-11-09

## Objective
Paste one product URL and delivery destination; automatically find real competing offers, shipping, import costs and price-history evidence. Never ask users to enter sellers manually.

## Verified infrastructure
GitHub Pages frontend and Cloudflare Worker deployed successfully; API at https://dealtruth-api.george-stathopoulos.workers.dev. Existing Skroutz URL extracted public product metadata.

## Current implementation
Added optional API.SH Skroutz product-offer integration, mapping real merchant names and observed item prices and sorting them. UI renders those offers separately, never labels them delivered prices. Unit test covers ordering and unknown shipping. Changes pushed to main; deployment and production integration verification pending.

## Blocking dependency
API.SH provider needs a private Cloudflare Worker secret named APISH_KEY, obtained from https://api.sh/ after reviewing provider pricing, permitted usage and data licensing. Do NOT put this key in GitHub variables or browser JS. Without it, existing JSON-LD metadata extraction remains the fallback. API.SH is a third-party service, not the official Skroutz merchant API. Free allowance and terms must be confirmed by user before any financial commitment. See https://api.sh/docs/skroutz-product.

## Remaining P0
- Confirm and configure provider key and legal/commercial suitability
- Validate real offer count for Apple Watch Skroutz test URL in production
- Obtain verified shipping and checkout costs per destination; never treat missing as zero
- Integrate additional authorized retailers, exact variant matching, price history
- Production acceptance: one link -> multiple verified seller offers -> destination landed cost with transparent confidence

## Guardrails
No fabricated comparisons. No claim of completed MVP until real delivered-price comparison works end to end.
