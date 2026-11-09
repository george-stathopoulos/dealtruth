# DealTruth project state — 2026-11-09

## Objective
International, evidence-first price checker comparing the total cost of delivery for a chosen destination.

## Architecture
Current milestone: dependency-free static PWA on GitHub Pages, with browser-local user-entered offers. Pure ES modules, service worker and web manifest. Future backend: Cloudflare Workers + D1 for Google OAuth, saved profiles, server-side observations and alerts.

## Implemented
Product name/URL input (not extraction); delivery country, postal code, display currency; user-entered offer form with shipping, taxes, duties, fees and discounts; user-attested cost completeness; calculation and ranking for comparable destination/currency; responsive UI; localStorage; placeholder history/account states; unit tests; Pages CI/deploy workflow.

## Verified
Local unit tests for cost calculation passed prior to publishing. CI and GitHub Pages must be checked after commit; no live verification yet.

## Not implemented
Real product lookup, cross-store APIs, historical price feeds, Wayback integration, automatic international tax/FX/shipping quotes, Google sign-in, cloud account database, price alerts. Do not market as functioning live deal discovery.

## Critical risks
Authorized international data source coverage, destination-specific shipping and import charges, retailer licensing, exact product variant matching, account security and OAuth setup.

## Next steps
1. Verify Pages workflow, enable repository Pages using GitHub Actions if necessary, and smoke-test live URL.
2. Evaluate actual retailer-data and international shipping quote availability before promising automatic comparisons.
3. Implement backend and Google OAuth only after callback domain and Google OAuth credentials are configured securely.
