import React from 'react';
import PropTypes from 'prop-types';

const History = ({ type, amount, date }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}$</td>
    <td>{date}</td>
  </tr>
);

export default History;

History.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};
