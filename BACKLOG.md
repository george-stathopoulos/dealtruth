# DealTruth prioritized backlog

## P0 — Smart discovery and guided search
- [x] Product-name search entry and category-aware guided refinement (shoes, clothing, electronics, general)
- [ ] Connect refined queries to actual international retailer discovery and results
- [ ] Derive language-neutral canonical identity from URL: GTIN/EAN first, brand + MPN/model + variant second; never use translated retailer title as sole search key
- [ ] Localized sizing systems and variant normalization (EU/UK/US sizes, color, gender/fit, condition)
- [ ] Ask minimal category-specific follow-up questions, then re-query live providers automatically
- [ ] Persist refinements during search and distinguish exact matches from alternatives

## P0 — International automatic deal investigation
- [x] One URL + delivery destination; no manual seller entry
- [x] Universal schema.org product identity and observed-offer parser
- [x] Cloudflare Worker and GitHub Pages foundation
- [ ] Authorized cross-retailer discovery with exact GTIN/MPN/variant matching
- [ ] Destination-specific shipping, taxes, duties, fees and FX evidence
- [ ] Rank actual delivered prices only with complete comparable evidence
- [ ] Secure production hardening: rate limits, SSRF protection, provider quotas
- [ ] Real end-to-end acceptance tests across multiple retailers and countries

## P0 — Historical truth engine (core product, not optional polish)
- [ ] Build timestamped product-price and shipping-fee observation storage in D1
- [ ] Add Internet Archive / Wayback CDX discovery adapter (secondary evidence)
- [ ] Extract archived product prices only when exact variant and currency are provable
- [ ] Record archive timestamp, original URL, snapshot URL, extraction method and confidence
- [ ] Handle missing snapshots, dynamic pages, blocked archives and changed product URLs
- [ ] Detect apparent pre-discount price inflation using comparable dated observations
- [ ] Detect shipping-fee spikes separately from product price; never allege fraud
- [ ] Historical 30/90/180/365-day charts only when observations exist
- [ ] Evidence-backed deal verdict, sample count, coverage and uncertainty
- [ ] Avoid presenting archived prices as verified checkout or delivered totals

## P1 — Saved experience
- [ ] Google OAuth, secure cookies and D1 account/session tables
- [ ] Saved destination profiles, product watchlist and price-drop alerts
- [ ] Privacy controls, export and deletion

## Acceptance gate
For a real product URL, show exact matched product, sourced current offers, verifiable landed totals where available, historical price evidence (including archive when available), and a defensible verdict. Explicitly disclose unsupported countries, sellers, missing observations and uncertain shipping. No invented data or launch claims.
