import { productInCart } from 'constants/types/productsType';
import React from 'react';
import CartConfirmInfo from './CartConfirmInfo';
import CartConfirmLocation from './CartConformLocation';
import './style.scss';

interface Props {
  products: productInCart[];
}

const CartConfirm: React.FC<Props> = ({ products }) => {
  return (
    <div className='cartConfirm'>
      <CartConfirmLocation />
      <CartConfirmInfo listProducts={products} />
    </div>
  );
};

export default CartConfirm;
