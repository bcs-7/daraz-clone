import React, { useState, useEffect } from 'react';
import MainComponent2 from './passitems';

const Appitems = () => {
  const [jsonitems, setJsonitems] = useState([]);

  useEffect(() => {
    fetch('/items.json')
      .then((response) => response.json())
      .then((data) => setJsonitems(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <MainComponent2 jsonitems={jsonitems} />
    </div>
  );
};

export default Appitems;