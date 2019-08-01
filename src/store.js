import { createStore } from 'redux';
import mainReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 90 + 10),
      title: 'The Great Gatsby',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 90 + 10),
      title: 'The Grapes of Wrath',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 90 + 10),
      title: 'Nineteen Eighty-Four',
      category: 'History',
    },
  ],
  bookCount: 0,
};

const store = createStore(mainReducer, initialState);

export default store;
