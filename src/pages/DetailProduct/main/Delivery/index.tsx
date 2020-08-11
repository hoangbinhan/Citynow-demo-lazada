import DeliveryHeader from 'pages/DetailProduct/components/DeliveryHeader';
import DeliveryContent from 'pages/DetailProduct/components/DeliveryContent';

import React from 'react';
import './style.scss';
import DeliveryApp from 'pages/DetailProduct/components/DeliveryApp';

const Delivery: React.FC = () => {
  return (
    <div className='delevery'>
      <DeliveryHeader />
      <DeliveryContent />
      <DeliveryApp />
    </div>
  );
};

export default Delivery;
