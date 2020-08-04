import React from 'react';
import './style.scss';

interface Props {
  title: string;
  subtitle: string;
  imageFirst: string;
  imageSecond: string;
  imageThird: string;
}

const item: React.FC<Props> = ({
  title,
  subtitle,
  imageFirst,
  imageSecond,
  imageThird,
}) => {
  return (
    <div className='collection hp-mod-card-hover'>
      <a href='#' className='collection__link'>
        <div className='collection__link-title'>{title}</div>
        <div className='collection__link-subtitle'>{subtitle}</div>
        <div className='collection__link-products'>
          <div className='collection__link-products-image'>
            <img src={imageFirst} className='image' />
          </div>
          <div className='collection__link-products-image'>
            <img src={imageSecond} className='image' />
          </div>
          <div className='collection__link-products-image'>
            <img src={imageThird} className='image' />
          </div>
        </div>
      </a>
    </div>
  );
};

export default item;
