import React from 'react';
import FooterFirst from './main/FooterFirst';
import './style.scss';

const Footer: React.FC = (props) => {
  return (
    <div className='footer'>
      <FooterFirst />
      {/* <FooterSecond /> */}
    </div>
  );
};

export default Footer;
