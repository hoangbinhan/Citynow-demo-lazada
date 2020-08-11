import React from 'react';
import './style.scss';

interface Props {
  title: string;
}

const DeliveryHeaderTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className='delevery__header-title'>
      <span>{title}</span>
      <i className='fas fa-info-circle'></i>
    </div>
  );
};

export default DeliveryHeaderTitle;
