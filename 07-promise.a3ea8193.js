function makePromise(){return new Promise((function(e,n){Math.random()>.5&&e("✅ this is resolve"),n("❌ this is reject")}))}makePromise().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));
//# sourceMappingURL=07-promise.a3ea8193.js.map
