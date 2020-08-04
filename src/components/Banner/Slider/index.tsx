import React from 'react';
import './style.scss';

const Slider: React.FC = () => {
  return (
    <div className='carousel'>
      <ul className='carousel__track'>
        <li className='carousel__track-slide'>
          <img
            src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1_Ec1P8r0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp'
            alt=''
          />
        </li>
      </ul>
    </div>
  );
};

export default Slider;
