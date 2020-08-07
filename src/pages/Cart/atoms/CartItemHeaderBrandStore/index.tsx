import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  brandStore: string;
}

const CartItemHeaderBrandStore: React.FC<Props> = ({ brandStore }) => {
  return (
    <Link to='/' className='CartItem__Header-brandStore'>
      {brandStore}
    </Link>
  );
};

export default CartItemHeaderBrandStore;
