import React, { useState } from 'react';
import ButtonAddToCart from '../ButtonAddToCart';
import './style.scss';
import Recommend from 'components/Recommend';
import { RecommendProduct } from 'Mocks/Recommend';
import ButtonBuy from 'components/ButtonBuy';
import { product } from 'constants/types/productsType';

interface Props {
  product: product;
}

const Info: React.FC<Props> = (props) => {
  const [quantity, setQuantity] = useState(1);
  let { product } = props;

  function changeNumber(type: string) {
    if (type === 'decrease') {
      setQuantity(quantity - 1);
    } else if (type === 'increase') {
      setQuantity(quantity + 1);
    }
    return;
  }

  return (
    <div className='main-info'>
      <img src={product.imageUrl} alt='' className='image' />
      <div className='product-detail'>
        <div className='title'>{product.name}</div>
        <div className='rating'>19 đánh giá16 câu hỏi đã trả lời</div>
        <div className='brand'>Thương hiệu:OEMXem thêm Xe máy của OEM</div>
        <div className='price'>
          <span className='product-price'>{product.price}</span>
          <div className='old-price'>
            <span className='product-old-price'>{product.oldPrice}</span>
            <div className='discount'>-47%</div>
          </div>
        </div>

        <div className='numberPicker'>
          <div
            className='next-number-handle'
            // style={{ pointerEvents: quantity === 1 ? 'none' : '' }}
            onClick={() => changeNumber('decrease')}
          >
            -
          </div>
          <div className='number-input'>{quantity}</div>
          <div
            className='next-number-handle'
            onClick={() => changeNumber('increase')}
          >
            +
          </div>
        </div>
        <div className='button__box'>
          <ButtonBuy />
          <ButtonAddToCart quantity={quantity} />
        </div>
        <Recommend recommendProduct={RecommendProduct} />
      </div>
    </div>
  );
};

export default Info;
