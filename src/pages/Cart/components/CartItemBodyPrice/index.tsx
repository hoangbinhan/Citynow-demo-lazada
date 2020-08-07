import { deleteItemInCart } from 'actions/cart';
import { product } from 'constants/types/productsType';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import CartItemBodyPriceText from 'pages/Cart/atoms/CartItemBodyPriceText';
import CartItemBodyPriceControl from 'pages/Cart/atoms/CartItemBodyPriceControl';
import Popup from '../Popup';

interface Props {
  product: product;
}

const CartItemBodyPrice: React.FC<Props> = ({ product }) => {
  return (
    <div className='CartItem__Body-pricebox'>
      <CartItemBodyPriceText product={product} />
      <CartItemBodyPriceControl product={product} />
    </div>
  );
};

export default CartItemBodyPrice;
