import React from 'react';
import Book from '../components/Book';

const BookList = props => {
  const { books } = props;
  console.log(props);
  return (
    <table>
      <tr>
        <th>Book Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
    </table>
  );
};

export default BookList;
