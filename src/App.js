import React from 'react';
import './styles/style.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <BookList />
        <BookForm />
      </div>
    </div>
  );
}

export default App;
