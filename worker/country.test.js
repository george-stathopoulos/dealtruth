import test from 'node:test';import assert from 'node:assert/strict';import{filterSellerCountry,normalizeSellerCountry}from './country.js';
const offers=[{seller:'Verified Greek merchant',sellerCountry:'GR',sellerCountryVerified:true},{seller:'Unknown .gr merchant',sellerCountry:'GR',sellerCountryVerified:false},{seller:'German merchant',sellerCountry:'DE',sellerCountryVerified:true}];
test('Greek seller filter requires verified country',()=>assert.deepEqual(filterSellerCountry(offers,'GR'),[offers[0]]));
test('worldwide includes unverified origin',()=>assert.equal(filterSellerCountry(offers,'ALL').length,3));
test('invalid country rejected',()=>assert.throws(()=>normalizeSellerCountry('XX')));
