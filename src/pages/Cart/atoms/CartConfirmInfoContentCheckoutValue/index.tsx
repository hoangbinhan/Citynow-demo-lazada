import React from 'react';

interface Props {
  value: string;
}

const CartConfirmInfoContentCheckoutValue: React.FC<Props> = (props) => {
  const { value } = props;
  return (
    <div className='CartConfirmInfo__content-checkout-row-value'>{value}</div>
  );
};

export default CartConfirmInfoContentCheckoutValue;
