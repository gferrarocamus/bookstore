import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      category: 'Action',
    },
    {
      id: 2,
      title: 'The Grapes of Wrath',
      category: 'Action',
    },
    {
      id: 3,
      title: 'Nineteen Eighty-Four',
      category: 'History',
    },
  ],
};

const store = createStore(mainReducer, initialState, composeWithDevTools());

export default store;
