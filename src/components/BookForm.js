import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(createBook(book));
  },
});

const mapStateToProps = state => {
  const { books } = state;
  return { lastID: books[books.length - 1].id };
};

const BookForm = props => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const cat = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleInputChange = e => setTitle(e.target.value);
  const handleSelectChange = e => setCategory(e.target.value);

  const getId = () => props.lastID + 1;

  const bookFactory = (bookTitle, bookCategory) => ({
    id: getId(),
    title: bookTitle,
    category: bookCategory,
  });

  const handleSubmit = e => {
    e.preventDefault();

    props.addBook(bookFactory(title, category));
    setTitle('');
    setCategory('Action');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" id="titleLabel">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
          value={title}
        />
      </label>
      <label htmlFor="categories" id="categoriesLabel">
        Pick your book category:
        <select id="categories" value={category} onChange={handleSelectChange}>
          {cat.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  lastID: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookForm);
