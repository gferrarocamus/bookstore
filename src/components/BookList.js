import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = props => {
  const { deleteBook, books } = props;
  const handleRemoveBook = book => {
    deleteBook(book);
  };

  return (
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
              handleRemoveBook(book);
            }}
          />
        ))}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;
