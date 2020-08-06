import { productInCart } from 'constants/types/productsType';
import CartConfirmLocation from 'pages/Cart/components/CartConformLocation';
import React from 'react';
import CartConfirmInfo from '../CartConfirmInfo';
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
