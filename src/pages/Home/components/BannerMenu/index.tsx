import { arrRootItem } from 'Mocks/Menu';
import MenuItem from 'pages/Home/atom/MenuItem';
import React from 'react';
import './style.scss';

const Menu: React.FC = () => {
  let result = arrRootItem.map((item, index) => {
    let idName = `Level_1_category_No${index + 1}`;
    return <MenuItem key={index} id={idName} item={item} />;
  });

  return <ul className='menu_dropdown'>{result}</ul>;
};

export default Menu;
