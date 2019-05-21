import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ fullImg, hideModal }) => {
  return (
    <div
      className={styles.overlay}
      onClick={hideModal}
      onKeyPress={hideModal}
      role="button"
      tabIndex="0"
    >
      <div className={styles.modal}>
        <img src={fullImg} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  fullImg: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};
