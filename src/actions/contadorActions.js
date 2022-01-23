import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
  SET_NUMBER,
} from "../types";

export const sumar = () => ({
  type: INCREMENT,
});

export const sumar5 = () => ({
  type: INCREMENT_5,
  payload: 5,
});

export const restar = () => ({
  type: DECREMENT,
});

export const restar5 = () => ({
  type: DECREMENT_5,
  payload: 5,
});

export const reset = () => ({
  type: RESET,
});

export const setNumber = (num = 0) => ({
  type: SET_NUMBER,
  payload: num,
});
