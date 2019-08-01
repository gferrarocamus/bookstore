import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

// const mapStateToProps = state => ({
//   books: state.books,
// });

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(createBook(book));
  },
});

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

  const bookFactory = (bookTitle, bookCategory) => ({
    id: Math.floor(Math.random() * 90 + 10),
    title: bookTitle,
    category: bookCategory,
  });

  const handleSubmit = e => {
    e.preventDefault();

    props.addBook(bookFactory(title, category));
  };

  // console.log(title);
  // console.log(category);
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

export default connect(
  null,
  mapDispatchToProps
)(BookForm);
