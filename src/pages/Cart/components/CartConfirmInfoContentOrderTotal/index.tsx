import CartConfirmInfoContentOrderTotalFee from 'pages/Cart/atoms/CartConfirmInfoContentOrderTotalFee';
import CartConfirmInfoContentOrderTotalTitle from 'pages/Cart/atoms/CartConfirmInfoContentOrderTotalTitle';
import React from 'react';

interface Props {
  subTotal: number;
}

const CartConfirmInfoContentOrderTotal: React.FC<Props> = (props) => {
  const { subTotal } = props;
  return (
    <div className='CartConfirmInfo__content-order-total'>
      <CartConfirmInfoContentOrderTotalTitle />
      <CartConfirmInfoContentOrderTotalFee subTotal={subTotal} />
    </div>
  );
};

export default CartConfirmInfoContentOrderTotal;
