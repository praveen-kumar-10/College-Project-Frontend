import "./App.css";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="App">
      <Button
        className="btn-primary"
        title="Button"
        type="button"
        onClick={() => alert("hello")}
      />
    </div>
  );
}

export default App;
