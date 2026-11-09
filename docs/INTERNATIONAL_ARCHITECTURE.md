# DealTruth international architecture

## Contract
Input: arbitrary public HTTPS product URL, destination country, optional postal code, display currency.
Output: product identity (brand, GTIN/EAN, MPN, SKU, exact variant), source-backed offers, delivery cost evidence, coverage and confidence. Never fabricate a comparison.

## Stages
1. URL validation and guarded retrieval (SSRF protection, redirects denied, response size and timeout limits).
2. Universal structured data parser (schema.org Product, AggregateOffer and Offer); source adapter registry for special formats. Merchant feeds require approved API credentials.
3. Product identity matching by GTIN and exact variant; do not compare different generations, capacities, sizes, colors or conditions.
4. Offer normalization with seller, URL, source, timestamp, price and currency. Do not silently convert currencies.
5. Destination quote adapters for shipping, taxes, duties, mandatory fees; unknown values remain null. Compare **landed totals only when every component is known**.
6. History and alerts from licensed observations with timestamps and coverage; insufficient samples yield no deal verdict.

## Integration policy
One retailer-specific adapter must never define the public contract. Provider adapters may be unavailable; the universal parser remains usable for supported product metadata. Scraping is not a substitute for permitted access. Price feeds, FX and shipping providers must be validated individually before deployment.

## Security and reliability
No credentials in browser or Git. Restrict URLs to public HTTPS, reject redirects, DNS/private address vectors, cap fetch bytes and duration, rate limit by client, validate provider payloads, prevent unbounded concurrency and cache only where allowed. Current hostname filtering is **not sufficient SSRF protection** and the public lookup endpoint must be hardened before broad rollout.

## Release gate
Real URLs from at least three unrelated retailer platforms, verified identity and offers, destination-specific delivery quotes, accurate currency handling, tested unsupported cases, production monitoring and legal/provider coverage. No international-comparison launch claim before gate passes.
