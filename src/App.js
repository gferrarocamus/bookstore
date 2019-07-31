import React from 'react';
import './App.css';
import BookList from '../src/components/BookList';
import BookForm from '../src/components/BookForm';

function App() {
  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
