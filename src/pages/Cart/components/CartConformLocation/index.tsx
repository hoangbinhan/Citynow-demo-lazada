import React from 'react';
import './style.scss';
import CartConfirmLocationBody from 'pages/Cart/atoms/CartConformLocationBody';

const CartConfirmLocation: React.FC = () => {
  return (
    <div className='CartConfirmLocation'>
      <div className='CartConfirmLocation-label'>Địa điểm</div>
      <CartConfirmLocationBody />
    </div>
  );
};

export default CartConfirmLocation;
