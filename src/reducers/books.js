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
    category: 'Sci-Fi',
  },
];

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK': {
      return state.filter(({ id }) => action.id !== id);
    }
    default:
      return state;
  }
};

export default books;
