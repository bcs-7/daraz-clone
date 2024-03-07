import React from 'react';

const Listx = ({ data }) => {
  return (
  <li><img src={data.image} alt='abc'width={'83%'}/><br/>{data.catname}</li>
  );
};

export default Listx;