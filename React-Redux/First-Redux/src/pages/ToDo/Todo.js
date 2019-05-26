import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Todo.module.css';
import Modal from './Modal/Modal';
import { addTodo, delTodo, completeTodo, editTodo } from './TodoActions';
import TodoItems from './TodoItems/TodoItems';
import ModalEdit from './ModalEdit/ModalEdit';

class Todo extends Component {
  state = {
    title: ``,
    text: ``,
    fav: false,
    modal: false,
    completed: false,
    modalEdit: false,
    todoForEdit: {
      text: ``,
      title: ``,
      completed: false,
      fav: false,
    },
  };

  onInputText = e => {
    this.setState({ text: e.target.value });
  };

  onInputTitle = e => {
    this.setState({ title: e.target.value });
  };

  isFav = e => {
    this.setState({ fav: e.target.checked });
  };

  toogleModal = () => {
    this.setState(state => ({ modal: !state.modal }));
  };

  toogleModalEdit = () => {
    this.setState(state => ({ modalEdit: !state.modalEdit }));
  };

  handleTodoEdit = el => {
    this.setState({ todoForEdit: el }, this.toogleModalEdit());
  };

  closeModal = e => {
    if (e.which === 27) {
      this.toogleModal();
    }
  };

  onInputEditText = () => {};

  onInputEditTitle = e => {
    this.setState({ todoForEdit: { title: e.target.value } });
  };

  onSubmit = () => {
    const { title, text, fav, completed } = this.state;
    if (title !== `` && text !== ``) {
      const { addNote } = this.props;

      addNote({
        title,
        text,
        completed,
        fav,
        id: Date.now(),
      });
    }
    this.toogleModal();
  };

  render() {
    const { modal, modalEdit, todoForEdit } = this.state;
    const { todos, delNote, todoCompleted, editNote } = this.props;

    return (
      <>
        {modal ? (
          <Modal
            onInputTitle={this.onInputTitle}
            onInputText={this.onInputText}
            Submit={this.onSubmit}
            isFav={this.isFav}
            closeModal={this.closeModal}
            toogleModal={this.toogleModal}
          />
        ) : null}
        {modalEdit ? (
          <ModalEdit
            el={todoForEdit}
            toogleModalEdit={this.toogleModalEdit}
            editNote={editNote}
            onInputEditText={this.onInputEditText}
            onInputEditTitle={this.onInputEditTitle}
          />
        ) : null}
        <div className={styles.wrapper}>
          <button type="button" onClick={this.toogleModal}>
            Add Note
          </button>

          {todos.length > 0 ? (
            <TodoItems
              data={todos}
              delNote={delNote}
              todoCompleted={todoCompleted}
              handleTodoEdit={this.handleTodoEdit}
            />
          ) : null}
          <div className={styles.wrapper} />
        </div>
      </>
    );
  }
}
const stateToProps = state => ({
  todos: state.todos,
});

const dispatchToProp = dispatch => ({
  addNote(obj) {
    dispatch(addTodo(obj));
  },
  delNote(id) {
    dispatch(delTodo(id));
  },
  todoCompleted(id) {
    dispatch(completeTodo(id));
  },
  editNote(id) {
    dispatch(editTodo(id));
  },
});

export default connect(
  stateToProps,
  dispatchToProp,
)(Todo);

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addNote: PropTypes.func.isRequired,
  delNote: PropTypes.func.isRequired,
  todoCompleted: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
};
