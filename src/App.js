import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <Form />
      <div className="copy-rights">
        <p>
          Developed by{" "}
          <a href="https://maddula-sravan-kumar.vercel.app/">Sravan Kumar</a>
        </p>
      </div>
    </div>
  );
}

export default App;
