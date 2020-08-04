import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { productInCart } from 'constants/types/productsType';
import { AppState } from 'reducers';

interface Props {
  listProducts: productInCart[];
}

const CartConfirmInfo: React.FC<Props> = ({ listProducts }) => {
  const { cart } = useSelector((state: AppState) => state);

  const subTotal = () => {
    let result = listProducts.reduce((currentTotal, item) => {
      return currentTotal + parseInt(item.product.price) * item.quantity;
    }, 0);
    return Math.round(result * 100) / 100;
  };

  return (
    <div className='CartConfirmInfo'>
      <h2 className='CartConfirmInfo__heading'>Thông tin đơn hàng</h2>
      <div className='CartConfirmInfo__content'>
        <div className='CartConfirmInfo__content-checkout'>
          <div className='CartConfirmInfo__content-checkout-row'>
            <div className='CartConfirmInfo__content-checkout-row-label'>
              Tạm tính ({cart.number} sản phẩm)
            </div>
            <div className='CartConfirmInfo__content-checkout-row-value'>
              {subTotal()}₫
            </div>
          </div>
          <div className='CartConfirmInfo__content-checkout-row'>
            <div className='CartConfirmInfo__content-checkout-row-label'>
              Phí giao hàng
            </div>
            <div className='CartConfirmInfo__content-checkout-row-value'>
              0 ₫
            </div>
          </div>
          <div className='CartConfirmInfo__content-checkout-row'>
            <div className='CartConfirmInfo__content-checkout-row-label'>
              Khuyến mãi
            </div>
            <div className='CartConfirmInfo__content-checkout-row-value'>
              0 ₫
            </div>
          </div>
        </div>
        <div className='CartConfirmInfo__content-voucher'>
          <div className='CartConfirmInfo__content-voucher-input'>
            <input
              type='text'
              placeholder='Mã giảm giá(chỉ áp dụng 1 lần)'
              name=''
              id=''
            />
          </div>
          <div className='CartConfirmInfo__content-voucher-button'>ÁP DỤNG</div>
        </div>
        <div className='CartConfirmInfo__content-order'>
          <div className='CartConfirmInfo__content-order-total'>
            <div className='CartConfirmInfo__content-order-total-title'>
              Tổng cộng
            </div>
            <div className='CartConfirmInfo__content-order-total-fee'>
              {subTotal()}đ
            </div>
          </div>
          <div className='CartConfirmInfo__content-order-button'>
            XÁC NHẬN GIỎ HÀNG
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartConfirmInfo;
