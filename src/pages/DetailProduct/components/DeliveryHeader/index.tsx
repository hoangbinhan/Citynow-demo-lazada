import React from 'react';
import './style.scss';
import DeliveryHeaderTitle from 'pages/DetailProduct/atom/DeliveryHeaderTitle';
import DeliveryHeaderLocation from 'pages/DetailProduct/atom/DeliveryHeaderLocation';

const DeliveryHeader: React.FC = () => {
  return (
    <div className='delevery__header'>
      <DeliveryHeaderTitle title='Tuỳ chọn giao hàng' />
      <DeliveryHeaderLocation />
    </div>
  );
};

export default DeliveryHeader;
