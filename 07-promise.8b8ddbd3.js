const e=new Promise((e,o)=>{let l=Math.random()>.5;setTimeout(()=>{l&&e("Промис выполнился успешно с результатом (исполнен,  fulfilled)"),o("Промис выполнился с ошибкой (отклонен, rejected)")},2e3)});e.then(e=>{console.log(e)}),console.log(e);
//# sourceMappingURL=07-promise.8b8ddbd3.js.map
