# DealTruth project state — 2026-11-10

## Objective
Product-first global shopping investigator: URL or smart natural-language search → exact product/variant → up to ten sourced offers, seller-country filter and delivery destination → verified landed costs → historical deal evidence. Do not invent merchant results.

## Implemented on main
- Replaced diagnostic frontend with a responsive product-first search layout, URL/name tabs, contextual footwear/apparel/electronics refinements, separate seller/delivery countries, postal code and top-ten offer cards.
- Source-neutral retailer URL fallback; removed Skroutz-specific provider invocation. Retailer blocking does not block attempting a separately configured international feed.
- International feed adapter with source-backed offer normalization, product identity matching, destination/seller-country filters, deduplication and ten-result cap. Configurable via DISCOVERY_API_URL and DISCOVERY_API_KEY (not currently configured).
- Exact GTIN or brand+model matching when both sides provide identifiers; otherwise conservative name matching. Full size/color/condition variant matching is NOT complete.
- Historical Wayback snapshots and limited identity-matched structured-data listing prices. No historical verdict without enough evidence.
- Unknown delivery components remain null; never treat archive listing prices as delivered totals.
- Tests for international feed, seller country, URL fallback, ranking, historical evidence and metadata parser.

## Verification
Worker workflow 42710190551: SUCCESS. Frontend workflow 42710190216: SUCCESS (commit d397efc). A later docs-only workflow is in progress. Production end-to-end real merchant coverage is NOT verified.

## Blockers / next work
1. Select and authorize a real international retailer/product feed, then configure Worker secrets. Without it, genuine global top-ten offers are unavailable.
2. Verify live provider matching for electronics, shoes and apparel; implement exact size/color/capacity/condition matching, multi-currency FX and reliable shipping/tax/duty quote evidence.
3. Add timestamped D1 price history, defensible deal scoring, watchlists/alerts and authentication.
4. Harden SSRF/DNS protection, rate limiting, budgets and observability.
5. Validate final visual fidelity against approved mockup once available; complete mobile and desktop E2E smoke tests.

## Source of truth
See docs/SPEC.md, docs/INTERNATIONAL_ARCHITECTURE.md and docs/PROVIDER_CONTRACT.md. No production-ready global comparison claim before provider and delivered-cost acceptance tests pass.
