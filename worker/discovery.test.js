import test from 'node:test';import assert from 'node:assert/strict';import{identity,guidedSearch}from './discovery.js';import{parseCdx}from './archive.js';
test('GTIN overrides translated product title',()=>assert.equal(identity({name:'Ρολόι Apple',gtin:'1234567890123'}).key,'gtin:1234567890123'));
test('model and brand identify products across languages',()=>assert.equal(identity({name:'Κάμερα',brand:'Canon',mpn:'EOS R8'}).key,'model:canon:eos r8'));
test('footwear prompts for size and color',()=>assert.deepEqual(guidedSearch('Nike running shoes').questions,['size','color','fit']));
test('dress prompts for size and style',()=>assert.deepEqual(guidedSearch('summer dress').questions,['size','color','style']));
test('refinement rejects arbitrary facet keys',()=>assert.equal(guidedSearch('shoes',{size:'42',evil:'bad'}).searchTerms,'shoes 42'));
test('Wayback evidence never invents historical price',()=>{const rows=[['timestamp','statuscode','mimetype'],['20230101120000','200','text/html']];assert.equal(parseCdx(rows,'https://shop.example/p')[0].price,null)});
