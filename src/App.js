import React from 'react';
import './styles/style.css';
import BookListContainer from './containers/BookListContainer';
import BookForm from './components/BookForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <BookListContainer />
        <BookForm />
      </div>
    </div>
  );
}

export default App;
