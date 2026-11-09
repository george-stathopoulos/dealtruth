# DealTruth backlog

## P0 — User journey and real data
- [x] Remove manual seller-entry UI; require one URL and delivery destination
- [x] Implement safe, limited structured-product metadata extraction backend (source only, not verified prices)
- [x] Unit tests for parser and unsafe URL rejection
- [ ] Configure Cloudflare API deployment credentials and Worker URL
- [ ] Connect front end to Worker via deployment config (no manual browser setup)
- [ ] Obtain authorized retailer comparison feed and product identity matching
- [ ] Obtain destination-specific shipping, tax, duty and clearance fee estimates
- [ ] Build complete automatic landed-cost ranking; show evidence and confidence
- [ ] Verify complete production journey using real retailers and GR destination

## P1 — Personalization
- [ ] Google OAuth with secure backend session and D1
- [ ] Saved delivery profiles and watchlist

## P2 — Historical intelligence
- [ ] Verified timestamped price and shipping history
- [ ] Alerts and anomaly warnings
