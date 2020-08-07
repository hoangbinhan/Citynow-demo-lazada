import { product } from 'constants/types/productsType';
import CartItemBodyProductImage from 'pages/Cart/atoms/CartItemBodyProductImage';
import CartItemBodyProductInfo from 'pages/Cart/atoms/CartItemBodyProductInfo';
import CartItemBodyProductInput from 'pages/Cart/atoms/CartItemBodyProductInput';
import React from 'react';
import './style.scss';

interface Props {
  product: product;
}

const CartItemBodyProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className='CartItem__Body-product'>
      <CartItemBodyProductInput />
      <CartItemBodyProductImage product={product} />
      <CartItemBodyProductInfo product={product} />
    </div>
  );
};

export default CartItemBodyProduct;
