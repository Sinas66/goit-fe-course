import {
  STORE_ADD,
  STORE_REMOVE,
  STORE_TOGGLE_COMPLETE,
} from '../../utils/constants';

const initialStore = [
  {
    title: 'todo 1',
    description: 'descr',
    id: 'adsasdad',
    isOutOfStock: false,
    cost: 40.5,
    onStock: 100,
  },
  {
    title: 'todo 2',
    description: 'deasdasdasdscr',
    id: 'aoiqwsdad',
    isOutOfStock: true,
    cost: 77.3,
    onStock: 2,
  },
];

const storeReducer = (state = initialStore, action) => {
  switch (action.type) {
    case STORE_ADD:
      if (action.payload.title === '' || action.payload.description === '') {
        return state;
      }
      return [...state, action.payload];
    case STORE_REMOVE:
      return state.filter(el => el.id !== action.payload);
    case STORE_TOGGLE_COMPLETE:
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            isOutOfStock: !el.isOutOfStock,
          };
        }
        return el;
      });
    default:
      return state;
  }
};

export default storeReducer;
