const e=new Promise(((e,o)=>{const l=Math.random()>.5;setTimeout((()=>{l&&e("Промис выполнился успешно с результатом (исполнен,  fulfilled)"),o("Промис выполнился с ошибкой (отклонен, rejected)")}),2e3)}));e.then((e=>{console.log(e)})),console.log(e);
//# sourceMappingURL=07-promise.38ea7532.js.map
