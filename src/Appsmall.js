import React, { useState, useEffect } from 'react';
import MainComponent4 from './passsmall';
import MainComponent5 from './passsmall1';
import './index.css'

const Appsmall = () => {
  const [jsonsmall, setjsonsmall] = useState([]);

  useEffect(() => {
    fetch('/small.json')
      .then((response) => response.json())
      .then((data) => setjsonsmall(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="Appx">
      <MainComponent4 jsonsmall={jsonsmall} />
      <MainComponent5 jsonsmall={jsonsmall} />
    </div>
  );
};

export default Appsmall;