import React from 'react';
import Storex from './store';
import './index.css';

const MainComponent3 = ({ jsonstore }) => {
  return (
    <div className="storediv">
      {jsonstore.map((item, index) => (
        <Storex key={index} data={item} />
      ))}
    </div>
  );
};

export default MainComponent3;