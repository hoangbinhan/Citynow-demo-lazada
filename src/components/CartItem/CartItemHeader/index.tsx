import React from 'react';
import './style.scss';

interface Props {
  brandStore: string;
}

const CartItemHeader: React.FC<Props> = ({ brandStore }) => {
  return (
    <div className='CartItem__Header'>
      <input
        className='CartItem__Header-checkbox'
        type='checkbox'
        name=''
        id=''
      />
      <a className='CartItem__Header-brandStore' href=''>
        {brandStore}
      </a>
    </div>
  );
};

export default CartItemHeader;
