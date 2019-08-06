import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { id, title, author, percentage, category, removeBook } = props;
  return (
    <tr>
      <td className="book-category">{category}</td>
      <td className="book-title">{title}</td>
      <td className="book-author">{author}</td>
      <td className="action-buttons">
        <button type="button" className="action-button no-click" disabled>
          Comments
        </button>
        {' | '}
        <button
          className="action-button"
          type="button"
          onClick={() => {
            removeBook(id);
          }}
        >
          Remove
        </button>
        {' | '}
        <button className="action-button no-click" type="button" href="#" disabled>
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
        <div className="percentage-completed">
          <h1>
            {`${percentage}%`}
          </h1>
          <p>Completed</p>
        </div>
      </td>
      <td className="update-progresss-container">
        <button className="blue-button update-button light" type="button">
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
  percentage: PropTypes.func.isRequired,
};

export default Book;
