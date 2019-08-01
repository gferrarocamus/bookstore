const createBook = book => ({
  types: 'CREATE_BOOK',
  book,
});

const removeBook = index => ({
  types: 'REMOVE_BOOK',
  index,
});

export { createBook, removeBook };
