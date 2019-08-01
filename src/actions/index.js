const createBook = (book) => {
  'CREATE_BOOK',
  book;
};

const removeBook = (index) => {
  'REMOVE_BOOK',
  index;
};

export { createBook, removeBook };
