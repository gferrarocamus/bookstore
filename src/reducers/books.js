const books = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      const newStateCreate = [...state];
      newStateCreate.push(action.book);
      return newStateCreate;
    case 'REMOVE_BOOK':
      const newStateRemove = [...state];
      const index = newStateRemove.reduce((acc, current, index, arr) => {
        if (current.id === action.id) {
          acc = index;
        }
        return acc;
      }, 0);
      newStateRemove.splice(index, 1);
      return newStateRemove;
    default:
      return state;
  }
};

export default books;
