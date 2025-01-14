const BASE_URL = 'http://localhost:3000';

// --------------GET---------------------------------

// если обрабатываем http запрос только внутри ф - ции и не важно
// что - то возвращать с данной ф - ции => используем try...catch

async function getCapital() {
  try {
    const URL = 'https://restcountries.com/v3.1/';
    const resp = await fetch(`${URL}Ukraine`);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    const data = await resp.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

// когда с данными работаем за пределами ф - ции =>
// используем.then().catch();

async function getCapital() {
  const URL = 'https://restcountries.com/v3.1/';
  const resp = await fetch(`${URL}Ukraine`);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json;
}

// getCapital()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// ----------------------------------------------

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const books = await response.json();

  return books;
}

async function fetchBookById(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await response.json();

  return book;
}

// ---------------------POST----------------------

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books/13`, options);
  const newBook = await response.json();

  return new Book();
}

// ---------------------DELETE---------------------

async function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(url, options);
  const book = await response.json();

  return book;
}

// ---------------------PUT/PATCH----------------------

async function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
  const book = await response.json();

  return book;
}

// ------------------USAGE--------------------------------------

async function addAndRenderBook() {
  try {
    const book = await addBook({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

// ---------------------------------------------

// ----------------ПАРАЛЛЕЛЬНЫЕ ЗАПРОСЫ---------------------

async function getCapital1() {
  const URL = 'https://restcountries.com/v3.1/name/';
  const arr = ['Ukrainerrrrrr', 'France', 'Germany'];

  const responses = arr.map(async country => {
    const response = await fetch(`${URL}${country}`);

    if (!resp.ok) {
      throw new Error('Not found');
      // Promise.reject('Not found');
    }

    return response.json();
  });

  const prom = await Promise.allSettled(responses);
  return prom;
}
getCapital1()
  .then(data => {
    const res = data.filter(({ status }) => status === 'fulfilled');
    const rej = data.filter(({ status }) => status === 'rejected');
    console.log(res);
    console.log(rej);
  })
  .catch(error => console.log(error));
