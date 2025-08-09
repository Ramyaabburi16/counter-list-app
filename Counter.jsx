// Counter.jsx
import React from "react";

const Counter = ({ count, setCount, handleAdd }) => {
  return (
    <div>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br /><br />
      {/* <button onClick={handleAdd}>Add</button> */}
    </div>
  );
};

export default Counter;
