import React, { useState } from 'react';
import './style.scss';

interface Props {
  title: string;
  description: string;
  type: string;
}
const Popup: React.FC<Props> = (props) => {
  const { title, description, type } = props;
  return (
    <div className='popup'>
      <div className='popup__inner'>
        <div className='popup__inner-header'>{title}</div>
        <div className='popup__inner-body'>{description}</div>
        <div className='popup__inner-footer'>
          <button className='popup__inner-footer-default'>CANCEL</button>
          <button className='popup__inner-footer-primary'>{type}</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
