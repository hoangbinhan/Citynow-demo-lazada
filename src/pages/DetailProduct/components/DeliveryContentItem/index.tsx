import React from 'react';
import './style.scss';

interface Props {
  icon: any;
  title: string;
  description?: string;
  option?: string;
}

const DeliveryContentItem: React.FC<Props> = (props) => {
  const { icon, title, description, option } = props;
  return (
    <div className='delevery__Content-item'>
      {icon}
      <div className='delevery__Content-item-content'>
        <div className='delevery__Content-item-content-title'>{title}</div>
        <div className='delevery__Content-item-content-description'>
          {description}
        </div>
      </div>
      <div className='delevery__Content-item-option'>{option}</div>
    </div>
  );
};

export default DeliveryContentItem;
