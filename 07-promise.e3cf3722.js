!function(){var n=new Promise((function(n,o){var e=Math.random()>.5;setTimeout((function(){e&&n("Промис выполнился успешно с результатом (исполнен,  fulfilled)"),o("Промис выполнился с ошибкой (отклонен, rejected)")}),2e3)}));n.then((function(n){console.log(n)})),console.log(n)}();
//# sourceMappingURL=07-promise.e3cf3722.js.map
