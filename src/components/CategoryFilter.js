import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/index';

const CategoryFilter = ({ updateFilter }) => {
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
        Filter By Category:
        <select
          id="filter"
          onChange={e => {
            updateFilter(e.target.value);
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

CategoryFilter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updateFilter: changeFilter },
)(CategoryFilter);
