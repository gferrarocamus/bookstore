const uuidv1 = require('uuid/v1');

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export const initialState = [
  {
    id: uuidv1(),
    title: 'The Great Gatsby',
    category: 'Action',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: uuidv1(),
    title: 'The Grapes of Wrath',
    category: 'Action',
    author: 'John Steinbeck',
  },
  {
    id: uuidv1(),
    title: 'Nineteen Eighty-Four',
    category: 'Sci-Fi',
    author: 'George Orwell',
  },
];
