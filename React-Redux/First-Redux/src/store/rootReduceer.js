import { combineReducers } from 'redux';
import counterReducer from '../pages/HomePage/countReducer';
import todoReducer from '../pages/ToDo/TodoReducer';
import randomTodoReducer from '../pages/ToDo/randomTodoReducer';

const rootReducers = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  todoRandom: randomTodoReducer,
});

export default rootReducers;
