import "./App.css";
import ArrayUseState from "./Components/ArrayUseState/ArrayUseState";
import BooleanUseState from "./Components/BooleanUseState";
import Counter from "./Components/UseState/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <BooleanUseState />
        <ArrayUseState />
      </header>
    </div>
  );
}

export default App;
