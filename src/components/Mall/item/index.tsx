import React from 'react';
import './style.scss';

interface Props {
  brandImg: string;
  storeImg: string;
  name: string;
  description: string;
}

const Item: React.FC<Props> = (props) => {
  let { brandImg, storeImg, name, description } = props;
  return (
    <a href='#' className='mall-item hp-mod-card-hover'>
      <div className='mall-item__brand'>
        <img src={brandImg} alt='' className='image' />
      </div>
      <div className='mall-item__shop'>
        <img src={storeImg} alt='' className='image' />
      </div>
      <div className='mall-item__stores-brand'>{name}</div>
      <p className='mall-item__stores-description'>{description}</p>
    </a>
  );
};
export default Item;
