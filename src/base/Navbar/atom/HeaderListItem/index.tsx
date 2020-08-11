import React from 'react';
import './style.scss';

interface Props {
  item: string;
}
const HeaderListItem: React.FC<Props> = ({ item }) => {
  return (
    <li className='headerList__item'>
      <a href='/' className='headerList__item-link'>
        {item}
      </a>
    </li>
  );
};

export default HeaderListItem;
