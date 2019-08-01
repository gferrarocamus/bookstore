import React from 'react';
import PropTypes from 'prop-types';

const BookList = (props) => {
  const { books } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf[PropTypes.object].isRequired,
};

export default BookList;
