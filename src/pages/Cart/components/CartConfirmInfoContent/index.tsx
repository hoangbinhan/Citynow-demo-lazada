import { productInCart } from 'constants/types/productsType';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'reducers';
import CartConfirmInfoContentCheckout from '../CartConfirmInfoContentCheckout';
import CartConfirmInfoContentVoucher from '../CartConfirmInfoContentVoucher';
import CartConfirmInfoContentOrder from '../CartConfirmInfoContentOrder';

interface Props {
  listProducts: productInCart[];
}

const CartConfirmInfoContent: React.FC<Props> = ({ listProducts }) => {
  const { cart } = useSelector((state: AppState) => state);

  const subTotal = () => {
    let result = listProducts.reduce((currentTotal, item) => {
      return currentTotal + parseInt(item.product.price) * item.quantity;
    }, 0);
    return Math.round(result * 100) / 100;
  };

  return (
    <div className='CartConfirmInfo__content'>
      <CartConfirmInfoContentCheckout
        number={cart.number}
        subTotal={subTotal()}
      />
      <CartConfirmInfoContentVoucher />
      <CartConfirmInfoContentOrder subTotal={subTotal()} />
    </div>
  );
};

export default CartConfirmInfoContent;
