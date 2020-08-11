import HeaderAds from 'base/Navbar/atom/HeaderAds';
import HeaderLogo from 'base/Navbar/atom/HeaderLogo';
import NavbarBodyCart from 'base/Navbar/components/NavbarBodyCart';
import NavbarBodySearch from 'base/Navbar/components/NavbarBodySearch';
import React from 'react';
import './style.scss';

const NavbarBody: React.FC = (props) => {
  return (
    <div className='headerBody'>
      <HeaderLogo />
      <NavbarBodySearch />
      <NavbarBodyCart />
      <HeaderAds />
    </div>
  );
};

export default NavbarBody;
