// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом исполнен');
//     }
//     reject('Промис выполнился с ошибкой');
//   }, 1000);
// });

// // promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(result);
// }

// function onRejected(error) {
//   console.log(error);
// }

// promise.then(result => {
//   console.log(result);
// });

function makePromise() {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('✅ this is resolve');
      }
      reject('❌ this is reject');
    }, 2000);
  });
}
makePromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));
