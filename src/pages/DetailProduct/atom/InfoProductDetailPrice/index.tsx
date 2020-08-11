import { product } from 'constants/types/productsType';
import React from 'react';
import './style.scss';
interface Props {
  product: product;
}

const InfoProductDetailPrice: React.FC<Props> = (props) => {
  let { product } = props;

  return (
    <div className='price'>
      <span className='product-price'>{product.price} ₫</span>
      <div className='old-price'>
        <span className='product-old-price'>{product.oldPrice}</span>
        <div className='discount'>-47%</div>
      </div>
    </div>
  );
};

export default InfoProductDetailPrice;
