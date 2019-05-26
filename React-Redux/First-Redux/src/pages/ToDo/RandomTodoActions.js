import { RANDOM_TODO } from '../../utils/constants';

const randomTodo = obj => ({
  type: RANDOM_TODO,
  payload: obj,
});

export default randomTodo;
