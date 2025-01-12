const t="http://localhost:3000";function o(o,n){return fetch(`${t}/books/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(t=>t.json())}function n(o){return fetch(`${t}/books/${o}`,{method:"DELETE"}).then(t=>t.json())}o({title:"Большая Тестовая книга JS"},1),o({title:"книга CSS"},2),n(1),n(2);
//# sourceMappingURL=CRUD.ed2920d8.js.map
