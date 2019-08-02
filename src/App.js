import React from 'react';
import './styles/style.css';
import BookListContainer from './containers/BookListContainer';
import BookForm from './components/BookForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BookListContainer />
      <BookForm />
    </div>
  );
}

export default App;
