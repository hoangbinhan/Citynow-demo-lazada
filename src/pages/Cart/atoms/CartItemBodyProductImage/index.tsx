import { product } from 'constants/types/productsType';
import React from 'react';

interface Props {
  product: product;
}

const CartItemBodyProductImage: React.FC<Props> = ({ product }) => {
  return (
    <div className='CartItem__Body-product-image'>
      <img src={product.imageUrl} />
    </div>
  );
};

export default CartItemBodyProductImage;
