import React, { useEffect } from 'react';
import NavbarBody from './main/NavbarBody';
import NavbarList from './main/NavbarList';
import './style.scss';

const Navbar: React.FC = () => {
  useEffect(() => {
    const header = document.getElementById('myHeader');
    const sticky = header?.offsetTop;
    if (sticky != null) {
      window.onscroll = function () {
        if (window.pageYOffset > sticky) {
          header?.classList.add('sticky');
        } else {
          header?.classList.remove('sticky');
        }
      };
    }
    return () => {};
  }, []);

  return (
    <div className='header' id='myHeader'>
      <NavbarList />
      <NavbarBody />
    </div>
  );
};

export default Navbar;
