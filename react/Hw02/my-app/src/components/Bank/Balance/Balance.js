import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, withdraw, deposit }) => (
  <section className={styles.balance}>
    <span>
      <span role="img" aria-label="ArrowUP">
        ⬆️
      </span>
      {deposit}$
    </span>
    <span>
      {' '}
      <span role="img" aria-label="ArrowDown">
        ⬇️
      </span>
      {withdraw}$
    </span>
    <span>Balance: {balance}$</span>
  </section>
);

export default Balance;

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  withdraw: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
};
