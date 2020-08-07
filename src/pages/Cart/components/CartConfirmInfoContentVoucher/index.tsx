import CartConfirmInfoContentVoucherButton from 'pages/Cart/atoms/CartConfirmInfoContentVoucherButton';
import CartConfirmInfoContentVoucherInput from 'pages/Cart/atoms/CartConfirmInfoContentVoucherInput';
import React from 'react';

const CartConfirmInfoContentVoucher: React.FC = () => {
  return (
    <div className='CartConfirmInfo__content-voucher'>
      <CartConfirmInfoContentVoucherInput />
      <CartConfirmInfoContentVoucherButton />
    </div>
  );
};

export default CartConfirmInfoContentVoucher;
