import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, changeFilter } from '../redux/actions/index';
import CategoryFilter from './CategoryFilter';
import Book from './Book';

const mapStateToProps = (state) => ({
  books: state.books.filter((book) => (state.filter === '' ? true : book.category === state.filter)),
});

const BookList = ({ books, deleteBook, handleFilterChange }) => (
  <div>
    <CategoryFilter handleFilterChange={handleFilterChange} />
    <table className="books-table">
      <tbody>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            percentage={book.percentage}
            removeBook={deleteBook}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  deleteBook: removeBook,
  handleFilterChange: changeFilter,
})(BookList);
