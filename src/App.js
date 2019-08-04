import React from 'react';
import './App.css';
import BookListContainer from './containers/BookListContainer';
import BookForm from './components/BookForm';

function App() {
  return (
    <div>
      <BookForm />
      <BookListContainer />
    </div>
  );
}

export default App;
