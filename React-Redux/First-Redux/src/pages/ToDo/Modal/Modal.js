import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({
  Submit,
  onInputTitle,
  onInputText,
  isFav,
  closeModal,
  toogleModal,
}) => {
  return (
    <div
      className={styles.modal_wrapper}
      role="button"
      onClick={closeModal}
      onKeyDown={e => closeModal(e)}
      tabIndex={0}
    >
      <form className={styles.modal}>
        <p>Введите Заголовок</p>
        <input
          type="text"
          onChange={onInputTitle}
          className={styles.inputTitle}
          ref={input => input && input.focus()}
        />
        <p>Введите текст</p>
        <textarea
          cols="30"
          rows="10"
          onChange={onInputText}
          className={styles.inputText}
        />
        <button
          className={styles.closeModal}
          onClick={toogleModal}
          type="button"
        >
          X
        </button>
        <div>
          <span>Add to favorite? </span>
          <input type="checkbox" onChange={isFav} />
        </div>
        <button type="submit" onClick={Submit}>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  Submit: PropTypes.func.isRequired,
  onInputTitle: PropTypes.func.isRequired,
  onInputText: PropTypes.func.isRequired,
  isFav: PropTypes.func.isRequired,
  toogleModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
