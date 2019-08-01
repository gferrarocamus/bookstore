const books = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      const newStateCreate = Object.assign({}, state);
      newStateCreate.books.push(action.book);
      return newStateCreate;
    case 'REMOVE_BOOK':
  const  newStateRemove= Object.assign({}, state);
  newStateRemove.books.splice(action.index, 1)
      return newStateRemove;
    default:
      return state;
  }
};

export default books;
