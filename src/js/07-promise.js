const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом');
    }
  }, 2000);
});
