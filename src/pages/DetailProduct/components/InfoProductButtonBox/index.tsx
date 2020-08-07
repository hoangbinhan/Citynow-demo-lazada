import ButtonAddToCart from 'pages/DetailProduct/atom/ButtonAddToCart';
import ButtonBuy from 'pages/DetailProduct/atom/ButtonBuy';
import React from 'react';

interface Props {
  quantity: number;
}

const InfoProductButtonBox: React.FC<Props> = (props) => {
  const { quantity } = props;
  return (
    <div className='button__box'>
      <ButtonBuy />
      <ButtonAddToCart quantity={quantity} />
    </div>
  );
};

export default InfoProductButtonBox;
