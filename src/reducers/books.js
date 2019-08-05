const initialState = [
  {
    id: 1000,
    title: 'The Great Gatsby',
    category: 'Action',
  },
  {
    id: 1001,
    title: 'The Grapes of Wrath',
    category: 'Action',
  },
  {
    id: 1002,
    title: 'Nineteen Eighty-Four',
    category: 'History',
  },
];

const books = (state = initialState, action) => {
  const newState = [...state];
  switch (action.type) {
    case 'CREATE_BOOK':
      newState.push(action.book);
      return newState;
    case 'REMOVE_BOOK': {
      return state.filter(({ id }) => action.id !== id);
      // const index = newState.reduce((acc, current, i) => {
      //   if (current.id === action.id) {
      //     acc = i;
      //   }
      //   return acc;
      // }, 0);
      // newState.splice(index, 1);
      // return newState;
    }
    default:
      return state;
  }
};

export default books;
