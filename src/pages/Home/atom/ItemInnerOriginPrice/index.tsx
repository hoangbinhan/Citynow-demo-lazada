import React from 'react';
import ItemInnerPrice from 'pages/Home/atom/ItemInnerPrice';

interface Props {
  currentPrice: string;
}

const ItemInnerOriginPrice: React.FC<Props> = (props) => {
  const { currentPrice } = props;
  let discount = '-90%';

  return (
    <div className='cardContent-origin-price'>
      <div className='origin-price'>
        <div className='origin-price-price'>{currentPrice}</div>
        <div className='origin-price-currency'> ₫</div>
      </div>
      <span className='discount'>{discount}</span>
    </div>
  );
};

export default ItemInnerOriginPrice;
