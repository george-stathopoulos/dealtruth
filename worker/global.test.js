import test from 'node:test';import assert from 'node:assert/strict';import{normalizeFeedOffers,matchProduct,discover}from './global.js';
const target={name:'Nothing CMF Watch 3 Pro Dark Grey',brand:'Nothing',mpn:'CMF-3PRO'};
const candidate=(seller,price,country='GR')=>({seller,productName:'Nothing CMF Watch 3 Pro Dark Grey',brand:'Nothing',mpn:'CMF-3PRO',price,currency:'EUR',url:'https://store.example.org/p/'+seller,sellerCountry:country,shipsTo:['GR'],shipping:4,taxes:0,duties:0,fees:0});
test('feed matches exact brand model and excludes unrelated models',()=>{const x=normalizeFeedOffers({offers:[candidate('A',100),{...candidate('B',20),mpn:'DIFFERENT'}]},target,'GR','ALL');assert.equal(x.offers.length,1);assert.equal(x.offers[0].totalDelivered,104);});
test('country filter applies to genuine merchant origin',()=>{const x=normalizeFeedOffers({offers:[candidate('Greek',100),candidate('German',90,'DE')]},target,'GR','GR');assert.equal(x.offers.length,1);assert.equal(x.offers[0].seller,'Greek');});
test('caps verified international results at ten',()=>{const x=normalizeFeedOffers({offers:Array.from({length:30},(_,i)=>candidate('Seller'+i,120-i))},target,'GR','ALL');assert.equal(x.offers.length,10);assert.equal(x.offers[0].totalDelivered,95);});
test('missing delivery components never become zero',()=>{const x=normalizeFeedOffers({offers:[{...candidate('A',100),shipping:null}]},target,'GR','ALL');assert.equal(x.offers[0].totalDelivered,null);});
test('without provider credentials no fabricated results',async()=>{const x=await discover({},target,'GR','ALL');assert.equal(x.status,'provider_not_configured');assert.deepEqual(x.offers,[]);});
test('identity rejects unrelated model',()=>assert.equal(matchProduct({brand:'Nothing',mpn:'Other',productName:'Nothing CMF Watch 3 Pro Dark Grey'},target),false));

test('rejects wrong size even when product name matches',()=>{const desired={name:'Nike Pegasus running shoes',size:'42'};assert.equal(matchProduct({productName:'Nike Pegasus running shoes',size:'43'},desired),false);});
test('rejects unknown color when exact color requested',()=>{const desired={name:'Nike Pegasus running shoes',color:'black'};assert.equal(matchProduct({productName:'Nike Pegasus running shoes'},desired),false);});
test('accepts exact requested apparel variant',()=>{const desired={name:'Summer linen midi dress',size:'M',color:'blue'};assert.equal(matchProduct({productName:'Summer linen midi dress',size:'M',color:'blue'},desired),true);});

test('exact identifier does not override mismatched color',()=>{assert.equal(matchProduct({brand:'Nothing',mpn:'CMF-3PRO',color:'silver'}, {...target,color:'dark grey'}),false);});
test('destination requires explicit provider shipping eligibility',()=>{const offer=candidate('A',100);delete offer.shipsTo;assert.equal(normalizeFeedOffers({offers:[offer]},target,'GR','ALL').offers.length,0);});
