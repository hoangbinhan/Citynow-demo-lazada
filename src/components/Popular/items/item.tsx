import React from 'react';
import './style.scss';

interface Props {
  isLeft: boolean;
  image: string;
  name: string;
  count: string;
}

const item: React.FC<Props> = ({ isLeft, image, name, count }) => {
  let itemClassName = isLeft
    ? 'popular-box-left hp-mod-card-hover'
    : 'popular-box hp-mod-card-hover';

  return (
    <div className={itemClassName}>
      <a href='/'>
        <img src={image} />
        <div className='description'>
          <p className='name'>{name}</p>
          <p className='count'>{count} Sản phẩm</p>
        </div>
      </a>
    </div>
  );
};

export default item;
