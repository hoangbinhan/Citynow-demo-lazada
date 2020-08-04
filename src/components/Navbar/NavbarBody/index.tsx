import React from 'react';
import NavbarBodyCart from '../NavbarBodyCart';
import NavbarBodySearch from '../NavbarBodySearch';
import './style.scss';
import { Link } from 'react-router-dom';

const NavbarBody: React.FC = (props) => {
  return (
    <div className='headerBody'>
      <Link to='/' className='headerBody__logo'>
        <img
          src='//laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png'
          className='headerBody__logo-img'
          alt=''
          onClick={() => window.scrollTo(0, 0)}
        />
      </Link>
      <NavbarBodySearch />
      <NavbarBodyCart />
      <Link to='/' className='headerBody__ads'>
        <img
          src='//laz-img-cdn.alicdn.com/images/ims-web/TB1zT1QbMgP7K4jSZFqXXamhVXa.png'
          className='headerBody__ads-img'
          alt=''
        />
      </Link>
    </div>
  );
};

export default NavbarBody;
