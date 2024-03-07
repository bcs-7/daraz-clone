import React from 'react';

const Storex = ({ data }) => {
  return (
    <div className='storex'><img src={data.productimg} alt='abg' width={'100%'} height={'190px'}/> <img className='storelogo' src={data.logo} alt='abt' width={'40px'} height={'40px'}/> <div className='storename'>{data.storename}</div>
    <div className='storemotto'>{data.motto}</div>
    </div>
  );
};

export default Storex;