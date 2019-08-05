import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, removeBook,
  } = props;
  return (
    <tr>
      <td className="book-category">{category}</td>
      <td className="book-title">{title}</td>
      <td>
        <button
          className="blue-button remove-button light"
          type="button"
          onClick={() => { removeBook(id); }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
