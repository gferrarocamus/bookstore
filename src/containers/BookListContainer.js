import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookList from '../components/BookList';
import { removeBook } from '../actions/index';

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteBook: book => {
    console.log(ownProps.books)
    dispatch(removeBook(ownProps.books.indexOf(book)));
  },
});

const BookListContainer = ({ books, deleteBook }) => (
  <BookList books={books} deleteBook={deleteBook} />
);

BookListContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListContainer);
