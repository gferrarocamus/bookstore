import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookList from '../components/BookList';
import { removeBook, changeFilter } from '../actions/index';

const mapStateToProps = state => {
  const { books } = state;
  const filteredBooks = books.filter(book => book.category === state.filter);
  if (state.filter !== '') return { books: filteredBooks };
  return { books };
};

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book.id));
  },
  handleFilterChange: filter => {
    dispatch(changeFilter(filter));
  },
});

const BookListContainer = ({ books, deleteBook, handleFilterChange }) => (
  <BookList books={books} deleteBook={deleteBook} handleFilterChange={handleFilterChange} />
);

BookListContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookListContainer);
