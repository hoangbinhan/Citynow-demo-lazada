import React from 'react';
import './style.scss';
import Menu from 'pages/Home/components/BannerMenu';
import Slider from 'pages/Home/components/BannerSlider';

const Banner: React.FC = () => {
  return (
    <div className='banner'>
      <Menu />
      <Slider />
    </div>
  );
};

export default Banner;
