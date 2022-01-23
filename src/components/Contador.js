import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  restar,
  restar5,
  setNumber,
  sumar,
  sumar5,
} from "../actions/contadorActions";

const Contador = () => {
  const [number, setNumber1] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("------>", e);
    setNumber1(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNumber(number));
  };

  return (
    <div>
      <h1>Contador</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label for="number">Enter Number:</label>
        <input type="text" onChange={handleChange} value={number} id="number" />
        <button type="submit">Change</button>
      </form>

      <nav>
        <button onClick={() => dispatch(sumar5())}>+5</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar5())}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
