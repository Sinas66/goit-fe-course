import {
  ADD_TODO,
  DEL_TODO,
  TODO_COMPLETED,
  EDIT_TODO,
} from '../../utils/constants';

const INITIALSTATE = [
  {
    title: 111,
    text: 111,
    id: 1,
    completed: false,
  },
  {
    title: 222,
    text: 222,
    id: 2,
    completed: false,
  },
  {
    title: 333,
    text: 333,
    id: 3,
    completed: false,
  },
  {
    title: 444,
    text: 444,
    id: 4,
    fav: true,
    completed: false,
  },
  {
    title: 555,
    text: 555,
    id: 5,
    completed: false,
  },
  {
    title: 666,
    text: 666,
    id: 6,
    completed: true,
  },
  {
    title: 777,
    text: 777,
    id: 7,
    completed: false,
  },
];

const todoReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      return state.filter(el => el.id !== action.payload);
    case TODO_COMPLETED:
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      });
    case EDIT_TODO:
      return state.map(el => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            text: action.payload.text,
            title: action.payload.title,
            completed: action.payload.completed,
          };
        }
        return el;
      });
    default:
      return state;
  }
};

export default todoReducer;
