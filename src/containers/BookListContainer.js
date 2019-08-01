import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookList from '../components/BookList';

const mapStateToProps = state => {
  const { books, bookCount } = state;
  return { books, bookCount };
};

const BookListContainer = ({ books }) => <BookList books={books} />;

BookListContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BookListContainer);
