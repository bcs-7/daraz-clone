import React, { useState, useEffect } from 'react';
import MainComponent from './pass';

const App = () => {
  const [jsoncat, setJsoncat] = useState([]);

  useEffect(() => {
    fetch('/cat.json')
      .then((response) => response.json())
      .then((data) => setJsoncat(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <MainComponent jsoncat={jsoncat} />
    </div>
  );
};

export default App;