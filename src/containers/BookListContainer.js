import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookList from '../components/BookList';
import { removeBook } from '../actions/index';

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book.id));
  },
});

const BookListContainer = ({ books, deleteBook }) => (
  <BookList books={books} deleteBook={deleteBook} />
);

BookListContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookListContainer);
