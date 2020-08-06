import { product } from 'constants/types/productsType';
import React from 'react';

interface Props {
  product: product;
}

const CartItemBodyProductInfo: React.FC<Props> = ({ product }) => {
  return (
    <div className='CartItem__Body-product-info'>
      <h3>{product.name}</h3>
      <p>{product.ip_address}</p>
    </div>
  );
};

export default CartItemBodyProductInfo;
