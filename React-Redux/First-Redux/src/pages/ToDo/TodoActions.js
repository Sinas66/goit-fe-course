import {
  ADD_TODO,
  DEL_TODO,
  TODO_COMPLETED,
  EDIT_TODO,
} from '../../utils/constants';

export const addTodo = obj => ({
  type: ADD_TODO,
  payload: obj,
});

export const delTodo = id => ({
  type: DEL_TODO,
  payload: id,
});

export const completeTodo = id => ({
  type: TODO_COMPLETED,
  payload: id,
});

export const editTodo = el => ({
  type: EDIT_TODO,
  payload: el,
});
