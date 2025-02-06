import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/reactproject/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="parent">
      <div className="header">
        <h1>JSON Data Display</h1>
        <div className="data">
          {data.map((item) => (
            <div className="data-item" key={item.id}>
              <strong>{item.color}</strong> - {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
