# DealTruth

International deal checker: **paste one product URL and specify a delivery destination**. The intended product automatically identifies matching offers and compares total delivered prices including shipping, tax, duties and mandatory fees.

## Current status
**Early preview, not yet a working automatic international comparison service.** The GitHub Pages UI accepts a URL and destination; manual retailer entry has been removed. The Cloudflare Worker in `worker/` can read public JSON-LD product metadata from compatible HTTPS product pages but is not yet deployed or wired to the public UI. It is not a price-comparison or checkout/shipping feed. When no source is available the app shows insufficient data rather than inventing prices.

## Deployment
GitHub Pages is deployed by `.github/workflows/pages.yml`. Worker deployment requires repository variable `CLOUDFLARE_ACCOUNT_ID` and secret `CLOUDFLARE_API_TOKEN`, with appropriate scoped Worker deployment permissions. The UI currently expects a future API origin configuration and intentionally reports that the backend is not connected. Do not paste API tokens into browser storage.

## Project rules
See [AGENTS.md](AGENTS.md), [PROJECT_STATE.md](PROJECT_STATE.md), [BACKLOG.md](BACKLOG.md), and [product spec](docs/SPEC.md).
