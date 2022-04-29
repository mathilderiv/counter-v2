import "./App.css";

import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Increment counter={counter} setCounter={setCounter} />
      <Decrement counter={counter} setCounter={setCounter} />

      {/* <div className="add-counter">
        <button
          onClick={() => {
            newCounter = [...counter];

            setCounter(newCounter);
          }}
        >
          Add Counter
        </button>
      </div> */}
    </div>
  );
}

export default App;
