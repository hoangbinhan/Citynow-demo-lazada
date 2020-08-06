import React from 'react';

interface Props {
  id: string;
  item: string;
}
const MenuItem: React.FC<Props> = (props) => {
  const { id, item } = props;
  return (
    <li className='menu_dropdown__item-root' id={id}>
      {item}
      <span className='menu_dropdown__item-root-icon'>
        <i className='fas fa-chevron-right'></i>
      </span>
    </li>
  );
};

export default MenuItem;
