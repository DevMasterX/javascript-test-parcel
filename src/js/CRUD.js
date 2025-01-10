const BASE_URL = 'http://localhost:3000';

// --------------GET---------------------------------

function fetchBooks() {
  fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookById(bookId) {
  fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
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

  fetch(`${BASE_URL}/books/13`, options).then(res => res.json());
}

// ---------------------PUT/PATCH----------------------

fetch(`${BASE_URL}/books/1`, options).then(res => res.json());
function updateBookById(aupdate, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Большая Тестовая книга JS',
    }),
  };
}
