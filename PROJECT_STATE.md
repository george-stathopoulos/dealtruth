# DealTruth project state — 2026-11-09

## Goal
Smart global shopping investigator: enter a product URL OR product-name query, answer contextual variant questions, identify exact item independently of website language, discover international sellers, calculate real delivered costs and investigate historical discount authenticity.

## Implemented in main
- PWA search UI for URLs and product names, category-aware refinements for footwear, apparel and electronics.
- Cloudflare Worker /api/lookup, /api/search and /api/archive routes.
- Language-neutral identity keys: GTIN first; brand + MPN/model second; translated retailer title only fallback.
- Generic schema.org JSON-LD Product/Offer extraction and normalized offers; optional API.SH Skroutz adapter.
- Wayback CDX snapshot discovery with links and dates; bounded inspection of two snapshots per lookup. Archived structured-data prices are accepted only with matching GTIN or brand+MPN; price observations are clearly not checkout totals.
- Unknown shipping, taxes, duties and FX remain unknown; no invented delivered-cost ranking.
- Top 10 observed-offer cap, duplicate suppression and same-currency sorting, with tests. Real global Top 10 requires connected international discovery providers.
- Unit tests for identity, category refinements, archive evidence and product parsing.
- Fetch timeout and streamed response cap. SSRF and abuse protection still require hardening.

## Verification
Latest commits pushed to GitHub. Earlier main-branch frontend workflow passed; new top-ten frontend and Worker workflows are running. No live archive extraction has been verified. Do not call the app a working global comparison MVP.

## Blocking work
1. Authorized multi-retailer product discovery providers with international coverage and licensing.
2. Exact size/color/condition/variant matching and automatic re-search across providers.
3. Real destination-specific shipping, taxes/duties/fees and FX data.
4. Archived page price extraction with strict product identity validation; timestamped D1 observation history and charts.
5. Historical deal verdicts, anomaly detection, Google OAuth, watchlists and alerts.
6. DNS-level SSRF mitigation, rate limiting, provider budgets, monitoring and production acceptance.

## Acceptance
Test real footwear, clothing and electronics queries plus unrelated international URLs. Confirm genuine multiple retailer matches, valid variant filters, real delivered quotes, archive observations, full CI and production smoke tests. No fabricated sellers, costs, prices or deal verdicts.
