import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItems.module.css';
import TodoItem from './TodoItem/TodoItem';

const TodoItems = ({ data, delNote, todoCompleted, handleTodoEdit }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        {data.map(el =>
          !el.completed ? (
            <TodoItem
              el={el}
              key={el.id}
              delNote={delNote}
              todoCompleted={todoCompleted}
              handleTodoEdit={handleTodoEdit}
            />
          ) : null,
        )}
      </ul>
      <ul className={styles.ul}>
        {data.map(el =>
          el.completed ? (
            <TodoItem
              el={el}
              key={el.id}
              delNote={delNote}
              todoCompleted={todoCompleted}
              handleTodoEdit={handleTodoEdit}
            />
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default TodoItems;

TodoItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  delNote: PropTypes.func.isRequired,
  todoCompleted: PropTypes.func.isRequired,
  handleTodoEdit: PropTypes.func.isRequired,
};
