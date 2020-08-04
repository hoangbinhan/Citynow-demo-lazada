import ContextMenu from 'components/ContextMenu';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

interface Props {
  image: string;
  title: string;
  price: string;
  currentPrice: string;
  id: string;
}

const Item: React.FC<Props> = ({ image, title, price, currentPrice, id }) => {
  let discount = '-90%';
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className='cardContent hp-mod-card-hover grid__column-2'
      ref={containerRef}
    >
      <Link to={`/products/${id}`} id='item__contextMenu'>
        <div className='cardContent-img-container'>
          <img src={image} alt='' className='cardContent-img' />
        </div>
        <div className='cardContent-text'>
          <h4 className='cardContent-title'>{title}</h4>
          <div className='cardContent-price'>
            <div className='price'>{price}</div>
            <div className='currency'> ₫</div>
          </div>
          <div className='cardContent-origin-price'>
            <div className='origin-price'>
              <div className='price'>{currentPrice}</div>
              <div className='currency'> ₫</div>
            </div>
            <span className='discount'>{discount}</span>
          </div>
        </div>
      </Link>
      <ContextMenu parentRef={containerRef} productId={id} />
    </div>
  );
};

export default Item;
