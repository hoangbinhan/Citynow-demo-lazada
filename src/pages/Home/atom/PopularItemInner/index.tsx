import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  image: string;
  name: string;
  count: string;
}

const PopularItemInner: React.FC<Props> = ({ image, name, count }) => {
  return (
    <Link to='/'>
      <img src={image} alt={name} />
      <div className='description'>
        <p className='name'>{name}</p>
        <p className='count'>{count} Sản phẩm</p>
      </div>
    </Link>
  );
};

export default PopularItemInner;
