import React from 'react';

interface Props {
  subTotal: number;
}

const CartConfirmInfoContentOrderTotalFee: React.FC<Props> = (props) => {
  const { subTotal } = props;
  return (
    <div className='CartConfirmInfo__content-order-total-fee'>{subTotal}đ</div>
  );
};

export default CartConfirmInfoContentOrderTotalFee;
