import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
  SET_NUMBER,
} from "../types";

const initialState = 0;

export default function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case INCREMENT_5:
      return state + action.payload;
    case DECREMENT:
      return state - 1;
    case DECREMENT_5:
      return state - action.payload;
    case RESET:
      return initialState;
    case SET_NUMBER:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
