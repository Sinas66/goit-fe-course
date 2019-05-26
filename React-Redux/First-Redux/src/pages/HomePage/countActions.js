import {
  HOME_COUNTER_INCREMENT,
  HOME_COUNTER_DECREMENT,
  HOME_COUNTER_A_LOT,
} from '../../utils/constants';

export const increment = count => ({
  type: HOME_COUNTER_INCREMENT,
  payload: count,
});

export const decrement = count => ({
  type: HOME_COUNTER_DECREMENT,
  payload: count,
});

export const more = () => ({
  type: HOME_COUNTER_A_LOT,
});
