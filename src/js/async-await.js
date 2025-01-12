const BASE_URL = 'http://localhost:3000';

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

// --------------GET---------------------------------

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
