import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <>
      <h1>Hello, {props.subject} {props.wlcome}!</h1>
      <button type="button" className="primary">
        Click me!
      </button>
    </>
  );
}

export default App;
