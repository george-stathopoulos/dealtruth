/** Pure currency-neutral cost calculations; never infer taxes, fees or FX. */
export function totalDelivered(o){
 const required=['price','shipping','tax','duty','fees','discount'];
 if(required.some(k=>o[k]===null||o[k]===undefined||o[k]===''||!Number.isFinite(Number(o[k]))||Number(o[k])<0))throw Error('All charges must be known and nonnegative');
 const n=required.reduce((s,k)=>s+(k==='discount'?-1:1)*Number(o[k]),0);
 if(n<0)throw Error('Discount exceeds total charge');
 return Math.round((n+Number.EPSILON)*100)/100;
}
export function compareOffers(offers,country,currency){
 return offers.filter(o=>o.destination===country&&o.currency===currency&&o.availability==='in_stock'&&o.complete===true).map(o=>({...o,total:totalDelivered(o)})).sort((a,b)=>a.total-b.total);
}
export function evaluateDeal(current,history){
 const v=history.filter(x=>x.verified===true&&Number.isFinite(x.delivered)&&x.delivered>=0).map(x=>x.delivered).sort((a,b)=>a-b);
 if(v.length<3)return{label:'Insufficient evidence',detail:'Three or more comparable verified historical observations required.'};
 const median=v[Math.floor(v.length/2)];
 if(median<=0)return{label:'Insufficient evidence',detail:'Historical median unavailable.'};
 const saving=(median-current)/median;
 return{label:saving>=.25?'Excellent deal':saving>=.1?'Good deal':'Not a good deal',detail:Math.abs(saving*100).toFixed(1)+'% '+(saving>=0?'below':'above')+' the historical median',median};
}