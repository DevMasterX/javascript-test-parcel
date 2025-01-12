const BASE_URL = 'http://localhost:3000';

// --------------GET---------------------------------

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}

// ---------------------POST----------------------

const newBook = {
  title: 'Тестовая книга JS',
  author: 'Я',
  genres: ['JS'],
  rating: 10,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books/13`, options).then(res => res.json());
}

// ---------------------PUT/PATCH----------------------

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}
updateBookById(
  {
    title: 'Большая Тестовая книга JS',
  },
  1
);
updateBookById(
  {
    title: 'книга CSS',
  },
  2
);

// ---------------------DELETE---------------------

function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}
removeBook(1);
removeBook(2);
