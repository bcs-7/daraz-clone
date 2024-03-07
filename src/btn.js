import React from 'react';
import './index.css';
const Btnx = ({ data }) => {
  return (
   <button className='tt'><img src={data.icon} alt='a' width={'10%'} height={'100%'} /> <div className='namett'>{data.name}</div></button>
  );
};

export default Btnx;