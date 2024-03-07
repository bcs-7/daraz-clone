import React from 'react';

const Smallx = ({ data }) => {
  return (
     <div className='cat0'><div><img className='cat0img' src={data.image} alt='e' width={'65%'} height={'65%'}/></div><div>{data.Name}</div></div>
  );
};

export default Smallx;