import React from 'react';
import './style.scss';
import HeaderListItem from 'base/Navbar/atom/HeaderListItem';

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
    return <HeaderListItem key={index} item={item} />;
  });

  return <ul className='headerList'>{listItem}</ul>;
}
