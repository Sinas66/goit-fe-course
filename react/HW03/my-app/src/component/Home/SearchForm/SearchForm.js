import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';
import genres from './genres.json';

const SearchForm = ({ OnSearch, onInput, onSelect }) => (
  <form action="">
    <input type="text" onChange={onInput} />
    <select name="" id="" onChange={onSelect}>
      <option disabled>Выберите жанр</option>
      {genres.map(el => (
        <option value={el}>{el}</option>
      ))}
    </select>
    <button type="button" onClick={OnSearch}>
      Search
    </button>
  </form>
);

export default SearchForm;

SearchForm.propTypes = {
  OnSearch: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
