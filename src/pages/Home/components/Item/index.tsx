import ContextMenu from 'pages/Home/components/ContextMenu';
import React, { useRef } from 'react';
import ItemInner from '../ItemInner';
import './style.scss';

interface Props {
  image: string;
  title: string;
  price: string;
  currentPrice: string;
  id: string;
}

const Item: React.FC<Props> = ({ image, title, price, currentPrice, id }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className='cardContent hp-mod-card-hover grid__column-2'
      ref={containerRef}
    >
      <ItemInner
        image={image}
        title={title}
        price={price}
        currentPrice={currentPrice}
        id={id}
      />
      <ContextMenu parentRef={containerRef} productId={id} />
    </div>
  );
};

export default Item;
