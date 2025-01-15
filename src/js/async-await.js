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
  const arr = ['Ukraine', 'France', 'Germany'];

  const responses = arr.map(async country => {
    const response = await fetch(`${URL}${country}`);

    if (!response.ok) {
      throw new Error('Not found');
      // Promise.reject('Not found');
    }

    return response.json();
  });

  const prom = await Promise.allSettled(responses);
  return prom;
}
// getCapital1()
//   .then(data => {
//     const res = data
//       .filter(({ status }) => status === 'fulfilled')
//       .map(({ value }) => value[0]);
//     const rej = data.filter(({ status }) => status === 'rejected');

//   })
//   .catch(error => console.log(error));

// ---------------------------------------------

const searchForm = document.querySelector('.js-search');
const addCountry = document.querySelector('.js-add');
const list = document.querySelector('.js-list');
const formContainer = document.querySelector('.js-form-container');

addCountry.addEventListener('click', handlerAddInput);

function handlerAddInput() {
  const markup = '<input type="text" name="country"/>';
  formContainer.insertAdjacentHTML('beforeend', markup);
}

searchForm.addEventListener('submit', handlerForm);

function handlerForm(evt) {
  evt.preventDefault();
  const data = new FormData(evt.currentTarget);
  const arr = data
    .getAll('country')
    .filter(item => item)
    .map(item => item.trim());
  getCountries(arr)
    .then(async resp => {
      const capitals = resp.map(({ capital }) => capital[0]);
      const weatherService = await getWeather(capitals);
      console.log('🚀  weatherService:', weatherService);
    })
    .catch(e => console.log(e));
}

async function getCountries(arr) {
  const resps = arr.map(async item => {
    const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`);
    if (!resp.ok) {
      throw new Error();
    }
    return resp.json();
  });
  const data = await Promise.allSettled(resps);

  const countryObj = data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0]);

  return countryObj;
}

async function getWeather(arr) {
  const BASE_URL = 'https://api.weatherapi.com/v1';
  const API_KEY = '1f583b8645b54c449e5214937241512';

  const resps = arr.map(async city => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: city,
      lang: 'uk',
    });

    const resp = await fetch(`${BASE_URL}/current.json?${params}`);

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(resps);

  const objs = data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value.current);

  console.log(objs);

  return objs;
}
