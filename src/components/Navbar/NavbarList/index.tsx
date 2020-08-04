import React from 'react';
import './style.scss';

export default function NavbarList() {
  let listItem = [
    'TIẾT KIỆM HƠN VỚI ỨNG DỤNG',
    'BÁN HÀNG CÙNG LAZADA',
    'CHĂM SÓC KHÁCH HÀNG',
    'KIỂM TRA ĐƠN HÀNG',
    'ĐĂNG NHẬP',
    'ĐĂNG KÝ',
    'CHANGE LANGUAGE',
  ].map(function (item, index) {
    if (index === 0 || index === 1) {
      return (
        <li className='headerList__item' key={index}>
          <a
            href='/'
            className='headerList__item-link headerList__item-link-blue'
          >
            {item}
          </a>
        </li>
      );
    }
    return (
      <li className='headerList__item' key={index}>
        <a href='/' className='headerList__item-link'>
          {item}
        </a>
      </li>
    );
  });

  return <ul className='headerList'>{listItem}</ul>;
}
