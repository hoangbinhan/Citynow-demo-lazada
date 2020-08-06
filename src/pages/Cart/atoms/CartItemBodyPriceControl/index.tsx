import { product } from 'constants/types/productsType';
import React from 'react';

interface Props {
  product: product;
  onDelete: Function;
}

const CartItemBodyPriceControl: React.FC<Props> = (props) => {
  const { product, onDelete } = props;

  return (
    <div className='CartItem__Body-pricebox-control'>
      <i className='far fa-heart'></i>
      <i className='fas fa-trash' onClick={() => onDelete(product.id)}></i>
    </div>
  );
};

export default CartItemBodyPriceControl;
