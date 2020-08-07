import React from 'react';
import CartConfirmInfoContentCheckoutLabel from '../CartConfirmInfoContentCheckoutLabel';
import CartConfirmInfoContentCheckoutValue from '../CartConfirmInfoContentCheckoutValue';

interface Props {
  label: string;
  value: string;
}

const CartConfirmInfoContentCheckoutRow: React.FC<Props> = (props) => {
  const { label, value } = props;
  return (
    <div className='CartConfirmInfo__content-checkout-row'>
      <CartConfirmInfoContentCheckoutLabel label={label} />
      <CartConfirmInfoContentCheckoutValue value={value} />
    </div>
  );
};

export default CartConfirmInfoContentCheckoutRow;
