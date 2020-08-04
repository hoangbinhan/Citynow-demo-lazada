import React from 'react';
import './style.scss';

const Menu: React.FC = () => {
  let arrRootItem = [
    'Thiết Bị Điện Tử',
    'Phụ Kiện Điện Tử',
    'TV & Thiết Bị Điện Gia Dụng',
    'Sức Khỏe & Làm Đẹp',
    'Hàng Mẹ, Bé & Đồ Chơi',
    'Siêu Thị Tạp Hóa',
    'Hàng Gia dụng & Đời sống',
    'Thời Trang Nữ',
    'Thời Trang Nam',
    'Phụ Kiện Thời Trang',
    'Thể Thao & Du Lịch',
    'Ôtô, Xe Máy & Thiết Bị Định Vị',
  ].map((item, index) => {
    let idName = `Level_1_category_No${index + 1}`;
    return (
      <li key={index} className='menu_dropdown__item-root' id={idName}>
        {item}
        <span className='menu_dropdown__item-root-icon'>
          <i className='fas fa-chevron-right'></i>
        </span>
      </li>
    );
  });

  return <ul className='menu_dropdown'>{arrRootItem}</ul>;
};

export default Menu;
