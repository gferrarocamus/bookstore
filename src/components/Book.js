import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { id, title, author, category, removeBook } = props;
  return (
    <tr>
      <td className="book-category">{category}</td>
      <td className="book-title">{title}</td>
      <td className="book-author">{author}</td>
      <td className="action-link">
        <button type="button" className="action-button">
          Comments
        </button>{' '}
        |{' '}
        <button
          className="action-button"
          type="button"
          onClick={() => {
            removeBook(id);
          }}
        >
          Remove
        </button>{' '}
        |{' '}
        <button className="action-button" type="button" href="#">
          Edit
        </button>
      </td>

      <td className="progress-container">
        <div className="circle">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>

              <div className="mask half">
                <div className="fill" />
              </div>

              <div className="inside-circle" />
            </div>
          </div>
        </div>
        <div>
          <h1>50%</h1>
          <p>Completed</p>
        </div>
      </td>

      <td>
        <button className="blue-button remove-button light" type="button">
          Update Progress
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
