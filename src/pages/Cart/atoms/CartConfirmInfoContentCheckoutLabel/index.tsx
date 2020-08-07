import React from 'react';

interface Props {
  label: string;
}

const CartConfirmInfoContentCheckoutLabel: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <div className='CartConfirmInfo__content-checkout-row-label'>{label}</div>
  );
};

export default CartConfirmInfoContentCheckoutLabel;
