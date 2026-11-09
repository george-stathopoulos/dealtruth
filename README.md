# DealTruth

**Know what you're really paying.** A mobile-first international PWA project for comparing product offers by **total delivered cost** (including shipping, additional taxes, duties, mandatory fees and eligible discounts).

## Preview scope
This first milestone is a dependency-free, browser-local **manual offer comparison prototype**. You can set country, postal code and currency, enter retailer costs, and compare matching complete offers. Price data is supplied by you, not fetched or verified independently. Historical prices and Google sign-in are **not implemented**. No real-data deal verdicts are claimed.

## Run and test
Requires Node 22+. Run `npm test`, `npm run build`, then use any static HTTP server for the repository root. A GitHub Actions workflow runs the checks and deploys the static prototype to GitHub Pages. In GitHub Settings → Pages select **GitHub Actions** as the build/deploy source if it is not already enabled.

## Architecture and project workflow
No dependencies in the preview. HTML/CSS/ES modules, web manifest and service worker, browser-local storage. Cloudflare Workers + D1 is planned for secure Google sign-in, saved user locations, API integrations and historical observation collection. See [product specification](docs/SPEC.md), [current project state](PROJECT_STATE.md), [development rules](AGENTS.md) and [backlog](BACKLOG.md).

No sensitive credentials should ever be committed.
