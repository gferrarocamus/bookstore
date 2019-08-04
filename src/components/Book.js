import React from 'react';

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

export default Book;
