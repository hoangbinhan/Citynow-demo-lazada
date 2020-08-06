import CartItemHeaderBrandStore from 'pages/Cart/atoms/CartItemHeaderBrandStore';
import CartItemHeaderInput from 'pages/Cart/atoms/CartItemHeaderInput';
import React from 'react';
import './style.scss';

interface Props {
  brandStore: string;
}

const CartItemHeader: React.FC<Props> = ({ brandStore }) => {
  return (
    <div className='CartItem__Header'>
      <CartItemHeaderInput />
      <CartItemHeaderBrandStore brandStore={brandStore} />
    </div>
  );
};

export default CartItemHeader;
