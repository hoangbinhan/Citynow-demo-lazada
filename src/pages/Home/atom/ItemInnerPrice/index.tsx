import React from 'react';

interface Props {
  price: string;
}

const ItemInnerPrice: React.FC<Props> = (props) => {
  const { price } = props;

  return (
    <div className='cardContent-price'>
      <div className='cardContent-price-price'>{price}</div>
      <div className='cardContent-price-currency'> ₫</div>
    </div>
  );
};

export default ItemInnerPrice;
