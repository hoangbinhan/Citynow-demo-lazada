import React from 'react';
import CartItemBody from './CartItemBody';
import CartItemHeader from './CartItemHeader';
import './style.scss';
import { product } from 'constants/types/productsType';

interface Props {
  product: product;
  quantity: number;
}

const CartItem: React.FC<Props> = ({ product, quantity }) => {
  return (
    <div className='CartItem'>
      <CartItemHeader brandStore='VIP' />
      <CartItemBody product={product} quantity={quantity} />
    </div>
  );
};
export default CartItem;
