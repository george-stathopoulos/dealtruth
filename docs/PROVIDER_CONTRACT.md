# International offer provider contract

DealTruth no longer depends on Skroutz. A retailer URL is an input for identifying a product, not a merchant integration.

## Configuration (Cloudflare Worker)
Set `DISCOVERY_API_URL` to an approved HTTPS product-discovery/feed endpoint and `DISCOVERY_API_KEY` as a Worker secret. Neither is configured by this code change. No global offers are fabricated if they are absent.

The Worker calls the endpoint with `q` (canonical identifier or normalized product query) and `country` (delivery destination), and sends `Authorization: Bearer <key>`.

Expected response:
```json
{
  "offers": [{
    "seller": "Actual merchant name",
    "sellerCountry": "GR",
    "productName": "Exact product name",
    "brand": "Brand",
    "mpn": "Model number",
    "gtin": "GTIN if known",
    "price": 100,
    "currency": "EUR",
    "url": "https://merchant.example.org/product",
    "shipsTo": ["GR"],
    "shipping": 5,
    "taxes": 0,
    "duties": 0,
    "fees": 0,
    "observedAt": "2026-11-10T00:00:00Z"
  }]
}
```

A zero cost is permitted only if the provider explicitly supplies it. Missing shipping, taxes, duties, or fees means delivered cost is unknown. The adapter validates product identity, filters seller country and destination, deduplicates and caps results at ten. Product names are fallback matching only; GTIN or brand+model is preferred.

## Current limitation
This is a working *integration contract*, not a connected international data feed. A provider must be selected, authorized, tested for country coverage and configured before genuine global top-ten results can be returned. Coverage must be assessed against real electronics, footwear and apparel queries. Product condition and variant matching need additional provider fields and validation before production-grade ranking.

## Security
Never expose feed credentials in GitHub Pages. Review provider license, retention rights, rate limits, origin/country accuracy and shipping/checkout evidence. Keep the existing URL fetch endpoint behind rate limiting; hostname-only SSRF protection is insufficient.
