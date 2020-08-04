import React from 'react';
import './style.scss';

const DealStatusClock: React.FC = () => {
  return (
    <div className='clock'>
      <div className='clock__label'>Kết thúc trong </div>
      <div className='clock__time'>14</div>
      <span className='clock__colon'>:</span>
      <div className='clock__time'>40</div>
      <span className='clock__colon'>:</span>
      <div className='clock__time'>03</div>
    </div>
  );
};
export default DealStatusClock;
