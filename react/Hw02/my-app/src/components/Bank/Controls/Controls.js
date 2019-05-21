import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ deposit, withdraw, input }) => (
  <section className={styles.controls}>
    <input type="number" onChange={input} />
    <button type="button" onClick={deposit}>
      Deposit
    </button>
    <button type="button" onClick={withdraw}>
      Withdraw
    </button>
  </section>
);

export default Controls;

Controls.propTypes = {
  deposit: PropTypes.func.isRequired,
  withdraw: PropTypes.func.isRequired,
  input: PropTypes.func.isRequired,
};
