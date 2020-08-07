import { productInCart } from 'constants/types/productsType';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'reducers';
import CartConfirmInfoContentCheckout from '../CartConfirmInfoContentCheckout';
import CartConfirmInfoContentVoucher from '../CartConfirmInfoContentVoucher';
import CartConfirmInfoContentOrder from '../CartConfirmInfoContentOrder';
import { subTotal } from 'pages/Cart/Utils/cartUtils';
interface Props {
  listProducts: productInCart[];
}

const CartConfirmInfoContent: React.FC<Props> = ({ listProducts }) => {
  const { cart } = useSelector((state: AppState) => state);

  const sub = subTotal(listProducts);

  return (
    <div className='CartConfirmInfo__content'>
      <CartConfirmInfoContentCheckout number={cart.number} subTotal={sub} />
      <CartConfirmInfoContentVoucher />
      <CartConfirmInfoContentOrder subTotal={sub} />
    </div>
  );
};

export default CartConfirmInfoContent;
