// App.js
import React, { useState } from "react";
import ListView from "./ListView.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);

  const handleAdd = () => {
    if (count > 0) {
      setValues([...values, count]);
    }
  };

  const handleReset = () => {
    setValues([]);
  };

  return (
    <div className="App">
      <h1>Counter & List App</h1>

      <div className="card">
        <div className="counter-section">
          <h2>Counter</h2>

          {/* Counter controls aligned left */}
          <div className="counter-controls">
            <button onClick={() => setCount(prev => Math.max(prev - 1, 0))}>–</button>
            <span className="counter-value">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>

          {/* Buttons with gap */}
          <div className="buttons-row">
            <button className="add-button" onClick={handleAdd}>
              Add to List
            </button>
            <button className="reset-button" onClick={handleReset}>
              Reset List
            </button>
          </div>
        </div>
      </div>

      <ListView values={values} />
    </div>
  );
}

export default App;
