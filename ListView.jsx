// ListView.jsx
import React from "react";

const ListView = ({ values = [] }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Added Values:</h3>
      {values.length === 0 ? (
        <p>No values added yet.</p>
      ) : (
        <ul>
          {values.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListView;
