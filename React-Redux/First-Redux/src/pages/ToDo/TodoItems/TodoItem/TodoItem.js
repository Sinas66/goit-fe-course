import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({ el, delNote, todoCompleted, handleTodoEdit }) => {
  return (
    <li className={styles.li}>
      <h2>{el.title}</h2>
      <p>{el.text}</p>
      {el.fav ? <i className={styles.fav} /> : null}
      <button type="button" onClick={() => todoCompleted(el.id)}>
        {!el.completed ? `Is Complete` : `Need edits`}
      </button>
      <button type="button" onClick={() => delNote(el.id)}>
        Del
      </button>
      <button type="button" onClick={() => handleTodoEdit(el)}>
        Edit
      </button>
    </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  el: PropTypes.shape().isRequired,
  delNote: PropTypes.func.isRequired,
  todoCompleted: PropTypes.func.isRequired,
  handleTodoEdit: PropTypes.func.isRequired,
};
