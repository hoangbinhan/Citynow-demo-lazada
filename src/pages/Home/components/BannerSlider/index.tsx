import React from 'react';
import './style.scss';
import BannerSliderItem from 'pages/Home/atom/BannerSliderItem';
import { Carousel } from 'antd';
import { dataSlider } from 'Mocks/Slider';

const Slider: React.FC = () => {
  const result = dataSlider.map((i) => {
    return <BannerSliderItem image={i.image} />;
  });
  return (
    <div className='carousel'>
      <Carousel autoplay>{result}</Carousel>
    </div>
  );
};

export default Slider;
