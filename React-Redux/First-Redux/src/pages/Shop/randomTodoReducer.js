import { RANDOM_TODO } from '../../utils/constants';

const randomTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case RANDOM_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default randomTodoReducer;
