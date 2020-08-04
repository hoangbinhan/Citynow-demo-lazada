import React from 'react';
import './style.scss';

const NavbarBodySearch: React.FC = (props) => {
  return (
    <div className='headerBodySearch'>
      <input type='text' placeholder='Tìm kiếm trên Lazada'></input>
      <div className='headerBodySearch__button'>
        <i className='fas fa-search'></i>
      </div>
    </div>
  );
};

export default NavbarBodySearch;
