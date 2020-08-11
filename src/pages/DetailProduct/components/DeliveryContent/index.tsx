import React from 'react';
import './style.scss';
import DeliveryContentItem from '../DeliveryContentItem';
import DeliveryHeaderTitle from 'pages/DetailProduct/atom/DeliveryHeaderTitle';

const DeliveryContent: React.FC = () => {
  return (
    <div className='delivery__content'>
      <DeliveryContentItem
        icon={<i className='fas fa-shipping-fast'></i>}
        title='GH tiêu chuẩn'
        description='1 - 5 ngày'
        option='261.800 ₫'
      />
      <DeliveryContentItem
        icon={<i className='fas fa-money-check-alt'></i>}
        title='Thanh toán khi nhận hàng. (Không được đồng kiểm)'
      />
      <div className='delivery__content-line'></div>
      <DeliveryHeaderTitle title='Đổi trả và Bảo hành' />
      <DeliveryContentItem
        icon={<i className='fab fa-rev'></i>}
        title='7 ngày trả hàng cho Nhà bán hàng'
        description='Không được trả hàng với lí do "Không vừa ý"'
      />
      <DeliveryContentItem
        icon={<i className='fas fa-shield-alt'></i>}
        title='Bằng Tem bảo hành 2 năm'
      />
      <div className='delivery__content-line'></div>
    </div>
  );
};

export default DeliveryContent;
