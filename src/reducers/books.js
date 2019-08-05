const uuidv1 = require('uuid/v1');

const initialState = [
  {
    id: uuidv1(),
    title: 'The Great Gatsby',
    category: 'Action',
  },
  {
    id: uuidv1(),
    title: 'The Grapes of Wrath',
    category: 'Action',
  },
  {
    id: uuidv1(),
    title: 'Nineteen Eighty-Four',
    category: 'Sci-Fi',
  },
];

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      const book = {
        id: uuidv1(),
        title: action.title,
        category: action.category,
      };
      return [...state, book];
    }
    case 'REMOVE_BOOK': {
      return state.filter(({ id }) => action.id !== id);
    }
    default:
      return state;
  }
};

export default books;
