import React from 'react';
import Itemsx from './items';
import './index.css';

const MainComponent2 = ({ jsonitems }) => {
  return (
    <div className="abcd">
      {jsonitems.map((item, index) => (
        <Itemsx key={index} data={item} />
      ))}
    </div>
  );
};

export default MainComponent2;