const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом исполнен');
    }
    reject('Промис выполнился с ошибкой');
  }, 2000);
});

promise.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error);
  }
);
