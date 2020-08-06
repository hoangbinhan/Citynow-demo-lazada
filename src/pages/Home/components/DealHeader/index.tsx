import React from 'react';
import DealStatusClock from '../DealStatusClock/index';
import './style.scss';

interface Props {
  status: string;
}

const DealHeader: React.FC<Props> = ({ status }) => {
  return (
    <div className='dealHeader'>
      <div className='dealHeader__status'>{status}</div>
      <DealStatusClock />
      <div className='dealHeader__buy'>MUA SẮM TOÀN BỘ SẢN PHẨM</div>
    </div>
  );
};
export default DealHeader;
