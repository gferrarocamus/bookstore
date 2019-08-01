import React from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList';


const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

const BookListContainer = props => {
  return <BookList books={props.books} />;
};

export default connect(mapStateToProps)(BookListContainer);
