import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = props => {
  const handleRemoveBook = book => {
    props.deleteBook(book);
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
        {props.books.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            removeBook={handleRemoveBook(book)}
          />
        ))}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookList;
