import ItemInnerOriginPrice from 'pages/Home/atom/ItemInnerOriginPrice';
import ItemInnerPrice from 'pages/Home/atom/ItemInnerPrice';
import React from 'react';

interface Props {
  title: string;
  price: string;
  currentPrice: string;
}

const ItemInnerText: React.FC<Props> = (props) => {
  const { title, price, currentPrice } = props;

  return (
    <div className='cardContent-text'>
      <h4 className='cardContent-title'>{title}</h4>
      <ItemInnerPrice price={price} />
      <ItemInnerOriginPrice currentPrice={currentPrice} />
    </div>
  );
};

export default ItemInnerText;
