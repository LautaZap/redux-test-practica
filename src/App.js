import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <div className={"App"}>
      <Provider store={store}>
        <h1>Redux Practica</h1>
        <hr />
        <Contador />
      </Provider>
    </div>
  );
}

export default App;
