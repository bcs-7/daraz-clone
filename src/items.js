import React from 'react';
import './index.css';

const Itemsx = ({ data }) => {
    const a = Math.round(((data.initialprice-data.price) / data.initialprice)* 100);
    if (data.name.length >= 56){
        data.name = data.name.slice(0,53) + "...";
    }
  return (
  <div className='itemsx'><div><img src={data.img} alt='a' width={'100%'} height={'250px'}/></div><div className='namex'>
    {data.name}    
    </div><div className='price'>Rs.{data.price}</div><div className='end'> <div className='finalprice'><del>Rs.{data.initialprice} </del>  </div><div className='discounta'>-{a}%</div>
    
    </div></div>
  );
};

export default Itemsx;