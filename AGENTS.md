# DealTruth development rules
- GitHub main is the source of truth. Record meaningful milestones in PROJECT_STATE.md.
- Prioritize accurate landed costs, evidence provenance, security and mobile usability.
- No fabricated retailer data or historical prices. Distinguish user-entered, estimated and independently verified values.
- Do not treat missing tax, duty, currency conversion or shipping costs as zero.
- Match exact product variant and destination before comparing offers.
- Preserve working functionality; use focused tests during development, full E2E before production claims.
- Keep Google OAuth credentials and API tokens in server secrets, never repository or localStorage.
- Avoid additional dependencies and paid services without clear value.
- Never claim live integrations, login or production deployment before verification.
