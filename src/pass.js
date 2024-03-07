import React from 'react';
import Btnx from './btn';

const MainComponent = ({ jsoncat }) => {
  return (
    <div className="abc">
      {jsoncat.map((item, index) => (
        <Btnx key={index} data={item} />
      ))}
    </div>
  );
};

export default MainComponent;