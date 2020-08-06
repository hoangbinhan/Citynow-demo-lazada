import CartConfirmInfoContentCheckoutRow from 'pages/Cart/atoms/CartConfirmInfoContentCheckoutRow';
import React from 'react';

interface Props {
  number: number;
  subTotal: number;
}

const CartConfirmInfoContentCheckout: React.FC<Props> = (props) => {
  const { number, subTotal } = props;

  return (
    <div className='CartConfirmInfo__content-checkout'>
      <CartConfirmInfoContentCheckoutRow
        label={`Tạm tính (${number} sản phẩm)`}
        value={`${subTotal}₫`}
      />
      <CartConfirmInfoContentCheckoutRow
        label={`Phí giao hàng`}
        value={`0 ₫`}
      />
      <CartConfirmInfoContentCheckoutRow label={`Khuyến mãi`} value={`0 ₫`} />
    </div>
  );
};

export default CartConfirmInfoContentCheckout;
