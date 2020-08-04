import React from 'react';
import './style.scss';

const CartConfirmLocation: React.FC = () => {
  return (
    <div className='CartConfirmLocation'>
      <div className='CartConfirmLocation-label'>Địa điểm</div>
      <div className='CartConfirmLocation-body'>
        <i className='fas fa-map-marker-alt'></i>
        <div className='CartConfirmLocation-body-address'>
          Bình Định, Huyện Phù Mỹ, Thị trấn Phù Mỹ
        </div>
      </div>
    </div>
  );
};

export default CartConfirmLocation;
