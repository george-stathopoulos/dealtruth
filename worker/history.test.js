import test from 'node:test';import assert from 'node:assert/strict';import{historicalObservation,historySummary}from './history.js';
const html=(gtin,price,currency='EUR')=>'<script type="application/ld+json">'+JSON.stringify({'@type':'Product',name:'A watch',gtin13:gtin,offers:{price,priceCurrency:currency}})+'</script>';
const snapshot={archivedAt:'2024-11-01',snapshotUrl:'https://web.archive.org/web/20241101000000id_/https://shop.example/watch'};
test('historical listing price requires matching GTIN',()=>{const current={name:'Translated watch',gtin:'1234567890123'};assert.equal(historicalObservation(html('9999999999999',250),current,snapshot),null);assert.equal(historicalObservation(html('1234567890123',250),current,snapshot).price,250)});
test('rejects history without identifiers',()=>assert.equal(historicalObservation(html('1234567890123',250),{name:'watch'},snapshot),null));
test('no historical deal claim from one observation',()=>assert.equal(historySummary([{date:'2024-11-01',price:250,currency:'EUR'}]).status,'insufficient_comparable_history'));
test('mixed currency observations are not compared',()=>assert.equal(historySummary([{date:'2024-01-01',price:100,currency:'USD'},{date:'2024-02-01',price:90,currency:'EUR'}]).sampleCount,0));
