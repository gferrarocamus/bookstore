import React from 'react';

const BookForm = () => {
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

export default BookForm;
