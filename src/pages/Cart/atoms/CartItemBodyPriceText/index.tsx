import { product } from 'constants/types/productsType';
import React from 'react';

interface Props {
  product: product;
}

const CartItemBodyPriceText: React.FC<Props> = ({ product }) => {
  return (
    <>
      <h1 className='CartItem__Body-pricebox-price'>{product.price}đ</h1>
      <h2 className='CartItem__Body-pricebox-oldprice'>{product.oldPrice}đ</h2>
      <p className='CartItem__Body-pricebox-discount'>25</p>
    </>
  );
};

export default CartItemBodyPriceText;
