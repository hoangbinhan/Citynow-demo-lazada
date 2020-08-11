import React, { useState } from 'react';
import './style.scss';
import DeliverySelect from 'pages/DetailProduct/components/DeliverySelect';

const DeliveryHeaderLocation: React.FC = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [location, setLocation] = useState('TP Hồ Chí Minh');

  const changeValue = (value: string) => {
    setLocation(value);
  };
  return (
    <>
      <div className='delivery__header-location'>
        <i className='fas fa-map-marker-alt'></i>
        <div className='delivery__header-location-address'>{location}</div>
        <div
          className='delivery__header-location-change'
          onClick={(e) => setIsSelect(!isSelect)}
        >
          THAY ĐỔI
        </div>
      </div>
      {isSelect ? <DeliverySelect changeValue={changeValue} /> : null}
    </>
  );
};

export default DeliveryHeaderLocation;
