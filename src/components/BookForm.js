import React from 'react';

const BookForm = () => {
  const cat = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];

  return (
    <form>
      <label>
        Title:
        <input type='text' name='title' />
      </label>
      <label>
        Pick your book category:
        <select>
          {cat.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default BookForm;
