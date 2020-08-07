import React from 'react';
import './style.scss';
import BannerSliderItem from 'pages/Home/atom/BannerSliderItem';

const Slider: React.FC = () => {
  return (
    <div className='carousel'>
      <ul className='carousel__track'>
        <BannerSliderItem />
      </ul>
    </div>
  );
};

export default Slider;
