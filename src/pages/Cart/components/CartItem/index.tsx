import React from 'react';

import './style.scss';
import { product } from 'constants/types/productsType';
import CartItemHeader from '../CartItemHeader';
import CartItemBody from '../CartItemBody';

interface Props {
  product: product;
  quantity: number;
}

const CartItem: React.FC<Props> = ({ product, quantity }) => {
  return (
    <div className='CartItem'>
      <CartItemHeader brandStore='' />
      <CartItemBody product={product} quantity={quantity} />
    </div>
  );
};
export default CartItem;
