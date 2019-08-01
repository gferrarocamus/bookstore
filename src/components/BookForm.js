import React, { useState } from 'react';
import { connect } from 'react-redux';
import createBook from '../actions/index';

const mapDispatchToProps = dispatch => ({
  createBook: () => {
    dispatch(createBook());
  },
});

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  
  const cat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <label htmlFor="title" id="titleLabel">
        <input type="text" name="title" id="title" />
        Title:
      </label>
      <label htmlFor="categories" id="categoriesLabel">
        Pick your book category:
        <select id="categories">
          {cat.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default connect(mapDispatchToProps)(BookForm);
