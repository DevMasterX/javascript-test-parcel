function makePromise(){return new Promise((function(e,n){var o=Math.random()>.5;setTimeout((function(){o&&e("✅ this is resolve"),n("❌ this is reject")}),2e3)}))}makePromise().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));
//# sourceMappingURL=07-promise.96cd4e09.js.map
