// Merchant origin is explicit provider evidence, never guessed from a domain or currency.
export const SELLER_COUNTRIES=['ALL','GR','DE','FR','IT','GB','US','CA','AU','JP'];
export function normalizeSellerCountry(raw){const code=String(raw||'ALL').toUpperCase();if(!SELLER_COUNTRIES.includes(code))throw Error('Unsupported seller country');return code;}
export function filterSellerCountry(offers,requested='ALL'){const code=normalizeSellerCountry(requested);if(!Array.isArray(offers))return[];return code==='ALL'?offers:offers.filter(o=>o.sellerCountryVerified===true&&String(o.sellerCountry||'').toUpperCase()===code);}
