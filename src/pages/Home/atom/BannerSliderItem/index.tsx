import React from 'react';

interface Props {
  image: string;
}
const BannerSliderItem: React.FC<Props> = ({ image }) => {
  return (
    <div className='carousel__track-slide'>
      <img src={image} alt='lazada' />
    </div>
  );
};

export default BannerSliderItem;
