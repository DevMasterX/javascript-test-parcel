var promise=new Promise((function(o,n){var e=Math.random()>.5;setTimeout((function(){e&&o("Промис выполнился успешно, с результатом исполнен"),n("Промис выполнился с ошибкой")}),2e3)}));promise.then((function(o){console.log(o)}),(function(o){console.log(o)}));
//# sourceMappingURL=07-promise.da634f81.js.map
