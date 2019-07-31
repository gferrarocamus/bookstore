const books = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      const newState = Object.assign({}, state);
      newState.books.push(action.book);
      return newState;
    case 'REMOVE_BOOK':
      return '';
    default:
      return state;
  }
};

export default books;
