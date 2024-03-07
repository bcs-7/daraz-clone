import React, { useState, useEffect } from 'react';
import MainComponent1 from './passlist';

const Applist = () => {
  const [jsonidk, setJsonidk] = useState([]);

  useEffect(() => {
    fetch('/idk.json')
      .then((response) => response.json())
      .then((data) => setJsonidk(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <MainComponent1 jsonidk={jsonidk} />
    </div>
  );
};

export default Applist;