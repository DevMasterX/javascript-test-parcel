(async function(){let e=["Ukrainerrrrrr","France","Germany"].map(async e=>{let t=await fetch(`https://restcountries.com/v3.1/name/${e}`);if(!resp.ok)throw Error("Not found");return t.json()});return await Promise.allSettled(e)})().then(e=>{let t=e.filter(({status:e})=>"fulfilled"===e),r=e.filter(({status:e})=>"rejected"===e);console.log(t),console.log(r)}).catch(e=>console.log(e));
//# sourceMappingURL=async-await.b0141067.js.map
