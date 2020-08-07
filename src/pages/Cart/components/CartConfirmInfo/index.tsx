import { productInCart } from 'constants/types/productsType';
import React from 'react';
import CartConfirmInfoContent from '../CartConfirmInfoContent';
import './style.scss';

interface Props {
  listProducts: productInCart[];
}

const CartConfirmInfo: React.FC<Props> = ({ listProducts }) => {
  return (
    <div className='CartConfirmInfo'>
      <h2 className='CartConfirmInfo__heading'>Thông tin đơn hàng</h2>
      <div className='CartConfirmInfo__content'>
        <CartConfirmInfoContent listProducts={listProducts} />
      </div>
    </div>
  );
};

export default CartConfirmInfo;
