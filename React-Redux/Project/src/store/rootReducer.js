import { combineReducers } from 'redux';
import ModalLoginReducer from '../components/ModalLogin/ModalLoginReducer';

const betsReducer = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  bets: betsReducer,
  isModalLoginShowed: ModalLoginReducer,
});

export default rootReducer;
