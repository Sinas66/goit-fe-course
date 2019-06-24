import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalEdit.module.css';

const ModalEdit = ({
  toogleModalEdit,
  el,
  editNote,
  onInputEditText,
  onInputEditTitle,
}) => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.modal}>
        <p>Новый Заголовок</p>
        <input
          type="text"
          onChange={onInputEditTitle}
          className={styles.inputTitle}
          // ref={input => input && input.focus()}
          defaultValue={el.title}
        />
        <p>Введите текст</p>
        <textarea
          cols="30"
          rows="10"
          onChange={onInputEditText}
          className={styles.inputText}
          defaultValue={el.text}
        />
        <button
          className={styles.closeModal}
          onClick={toogleModalEdit}
          type="button"
        >
          X
        </button>
        <div>
          <span>Add to favorite? </span>
          <input type="checkbox" onChange={null} />
        </div>
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            editNote(el);
            toogleModalEdit();
          }}
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

ModalEdit.propTypes = {
  toogleModalEdit: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  el: PropTypes.shape({}).isRequired,
  onInputEditText: PropTypes.func.isRequired,
  onInputEditTitle: PropTypes.func.isRequired,
};

export default ModalEdit;
