import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onNext, onPrev }) => (
  <div className={styles.controls}>
    <button onClick={onPrev} className={styles.button} type="button">
      Назад
    </button>
    <button onClick={onNext} className={styles.button} type="button">
      Вперед
    </button>
  </div>
);

export default Controls;

Controls.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
