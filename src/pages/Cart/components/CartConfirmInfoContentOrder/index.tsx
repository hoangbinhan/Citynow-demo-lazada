import CartConfirmInfoContentOrderButton from 'pages/Cart/atoms/CartConfirmInfoContentOrderButton';
import React from 'react';
import CartConfirmInfoContentOrderTotal from '../CartConfirmInfoContentOrderTotal';

interface Props {
  subTotal: number;
}

const CartConfirmInfoContentOrder: React.FC<Props> = (props) => {
  const { subTotal } = props;
  return (
    <div className='CartConfirmInfo__content-order'>
      <CartConfirmInfoContentOrderTotal subTotal={subTotal} />
      <CartConfirmInfoContentOrderButton />
    </div>
  );
};

export default CartConfirmInfoContentOrder;
