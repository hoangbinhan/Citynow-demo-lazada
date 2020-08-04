import React from 'react';
import Menu from './Menu';
import './style.scss';
import Slider from './Slider';

const Banner: React.FC = () => {
  return (
    <div className='banner'>
      <Menu />
      <Slider />
    </div>
  );
};

export default Banner;
