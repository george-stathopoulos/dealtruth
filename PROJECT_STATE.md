# DealTruth project state

## Objective
One product URL + delivery destination -> automatic product matching, seller comparison, historical evidence and landed costs. Manual retailer entry is explicitly NOT the product.

## Architecture
Static GitHub Pages front end; optional Cloudflare Worker for public JSON-LD product metadata extraction. Worker code is committed but deployment requires Cloudflare account ID and API token. Future D1 for Google sign-in and observation history. Data-source integrations are not available yet.

## Completed
Removed manual offer form from primary UI. Implemented URL/destination form with explicit unavailable state, public structured-data extraction Worker and unit tests. No fabricated comparisons or customs estimates.

## Verified
Source committed to GitHub; CI status and live endpoint still require verification for this milestone.

## Blockers
1. Cloudflare account ID, scoped deploy token and Worker deployment configuration.
2. Licensed/authorized price comparison and international delivery/import quote data sources. No automatic comparison can be honestly claimed without these.

## Next
Deploy Worker, configure frontend API URL, test real product URLs and coverage; integrate retailer feeds and landed-cost quotes, then Google OAuth.
