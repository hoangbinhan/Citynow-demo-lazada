import React from 'react';
import qrCode from 'assets/picture/Qr_code.png';
import './style.scss';

const DeliveryApp: React.FC = () => {
  return (
    <div className='delivery__app'>
      <div className='delivery__app-qr'>
        <img src={qrCode} alt='qr code' />
      </div>
      <div className='delivery__app-guide'>
        <img
          src='https://img.alicdn.com/tfs/TB1f4HzFbH1gK0jSZFwXXc7aXXa-96-96.png'
          alt='lazada'
        />
        <div className='delivery__app-guide-description'>
          Tải ngay ứng dụng để được miễn phí vận chuyển!
        </div>
      </div>
    </div>
  );
};

export default DeliveryApp;
