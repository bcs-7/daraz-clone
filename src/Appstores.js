import React, { useState, useEffect } from 'react';
import MainComponent3 from './passstore';

const Appstore = () => {
  const [jsonstore, setjsonstore] = useState([]);

  useEffect(() => {
    fetch('/stores.json')
      .then((response) => response.json())
      .then((data) => setjsonstore(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <MainComponent3 jsonstore={jsonstore} />
    </div>
  );
};

export default Appstore;