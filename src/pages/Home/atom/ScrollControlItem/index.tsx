import React from 'react';
import './style.scss';

interface Props {
  icon: any;
  content: string;
  id: string;
}
const ScrollControlItem: React.FC<Props> = (props) => {
  const { icon, content, id } = props;
  return (
    <li className='scrollControl__item'>
      <a href={id} className='scrollControl__item-link'>
        <i className={icon} />
      </a>
    </li>
  );
};

export default ScrollControlItem;
