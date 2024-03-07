import React from 'react';
import Listx from './list';

const MainComponent1 = ({ jsonidk }) => {
  return (
    <div className="abc">
      {jsonidk.map((item, index) => (
        <Listx key={index} data={item} />
      ))}
    </div>
  );
};

export default MainComponent1;