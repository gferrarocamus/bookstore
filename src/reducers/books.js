const books = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      // console.log(state);
      // const newStateCreate = Object.assign({}, state);
      // const newBooks = state.books.concat(action.books)
      const newStateCreate = [...state];
      console.log(newStateCreate);
      // newStateCreate.books = newStateCreate.books.concat(action.book);
      newStateCreate.push(action.book);
      console.log(newStateCreate);
      return newStateCreate;

    case 'REMOVE_BOOK':
      const newStateRemove = Object.assign({}, state);
      newStateRemove.books.splice(action.index, 1);
      return newStateRemove;
    default:
      return state;
  }
};

export default books;
