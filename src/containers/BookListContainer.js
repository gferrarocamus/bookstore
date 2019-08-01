import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookList from '../components/BookList';

const mapStateToProps = state => state;

const BookListContainer = state => <BookList books={state.books} />;

BookListContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BookListContainer);
