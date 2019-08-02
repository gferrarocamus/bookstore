import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import CategoryFilter from './CategoryFilter';

const BookList = props => {
  const { books, deleteBook, handleFilterChange } = props;

  return (
    <div>
      <br />
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <br />
      <table>
        <tbody>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th />
          </tr>
          {books.map(book => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              removeBook={() => {
                deleteBook(book);
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default BookList;
