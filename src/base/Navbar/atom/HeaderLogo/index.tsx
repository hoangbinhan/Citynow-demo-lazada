import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const HeaderLogo: React.FC = (props) => {
  return (
    <Link to='/' className='headerBody__logo'>
      <img
        src='//laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png'
        className='headerBody__logo-img'
        alt=''
        onClick={() => window.scrollTo(0, 0)}
      />
    </Link>
  );
};

export default HeaderLogo;
