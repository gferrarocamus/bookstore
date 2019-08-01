export const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = index => ({
  type: 'REMOVE_BOOK',
  index,
});

export default createBook;
