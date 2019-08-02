import React from 'react';

const CategoryFilter = props => {
  const { handleFilterChange } = props;
  const cat = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div>
      <label htmlFor="filter" id="filterLabel">
        Filter Books By Category:
        <select
          id="filter"
          onChange={e => {
            handleFilterChange(e.target.value);
          }}
        >
          {cat.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CategoryFilter;
