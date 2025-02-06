import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>JSON Data Display</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
