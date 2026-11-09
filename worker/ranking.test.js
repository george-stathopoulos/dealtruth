import test from 'node:test';import assert from 'node:assert/strict';import{topResults}from './ranking.js';
const offer=(n,c='EUR')=>({seller:'Seller '+n,price:n,currency:c,shipping:null,totalDelivered:null,source:'feed'});
test('top ten cap and ascending same-currency prices',()=>{const result=topResults(Array.from({length:30},(_,i)=>offer(30-i)));assert.equal(result.length,10);assert.deepEqual(result.map(o=>o.price),[1,2,3,4,5,6,7,8,9,10]);});
test('deduplicates identical offers',()=>assert.equal(topResults([offer(2),offer(2)]).length,1));
test('never converts currencies implicitly',()=>{const result=topResults([offer(1,'USD'),offer(2,'EUR')]);assert.equal(result.length,2);assert.equal(result[0].currency,'EUR');});
test('rejects invalid prices',()=>assert.equal(topResults([{seller:'A',price:null,currency:'EUR'}]).length,0));
