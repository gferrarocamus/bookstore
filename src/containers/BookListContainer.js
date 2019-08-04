import React from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList';


const mapStateToProps = state => ({
  books: state.books,
});

const BookListContainer = props => <BookList books={props.books} />;

export default connect(mapStateToProps)(BookListContainer);
