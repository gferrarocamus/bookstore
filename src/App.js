import React from 'react';
import './App.css';
import BookListContainer from '../src/containers/BookListContainer';
import BookForm from '../src/components/BookForm';

function App() {
  return (
    <div>
      <BookListContainer />
      <BookForm />
    </div>
  );
}

export default App;
