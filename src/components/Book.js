import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, type, category } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{type}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
