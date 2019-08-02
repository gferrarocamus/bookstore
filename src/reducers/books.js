const books = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case 'CREATE_BOOK':
      newState.push(action.book);
      return newState;
    case 'REMOVE_BOOK': {
      const index = newState.reduce((acc, current, i) => {
        if (current.id === action.id) {
          acc = i;
        }
        return acc;
      }, 0);
      newState.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default books;
