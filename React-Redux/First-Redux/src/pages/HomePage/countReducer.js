import {
  INITIALSTATE,
  HOME_COUNTER_INCREMENT,
  HOME_COUNTER_DECREMENT,
  HOME_COUNTER_A_LOT,
} from '../../utils/constants';

const counterReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case HOME_COUNTER_INCREMENT:
      if (action.payload > 0) {
        return state + action.payload;
      }
      return state;
    case HOME_COUNTER_DECREMENT:
      if (state >= action.payload) return state - action.payload;
      return state;
    case HOME_COUNTER_A_LOT:
      return 500;
    default:
      return state;
  }
};

export default counterReducer;
