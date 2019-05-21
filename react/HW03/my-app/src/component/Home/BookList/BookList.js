import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookList.module.css';
import BookListItem from './BookListItem/BookListItem';

const BookList = ({ data }) => {
  console.log(`BookLIST`, data);
  console.log(data.length);

  if (data.lengh === 0) {
    return;
  }
  return data.map(el => <BookListItem el={el} key={el.id} />);
};

export default BookList;

BookList.propTypes = {
  // OnSearch: PropTypes.func.isRequired,
  // onInput: PropTypes.func.isRequired,
  // onSelect: PropTypes.func.isRequired,
};
