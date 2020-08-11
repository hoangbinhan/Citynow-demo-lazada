import { product } from 'constants/types/productsType';
import React from 'react';
import './style.scss';
interface Props {
  product: product;
}

const InfoProductDetailInfo: React.FC<Props> = (props) => {
  let { product } = props;

  return (
    <>
      <div className='title'>{product.name}</div>
      <div className='rating'>19 đánh giá | 16 câu hỏi đã trả lời</div>
      <div className='brand'>
        Thương hiệu: OEM <span>Xem thêm của OEM</span>{' '}
      </div>
    </>
  );
};

export default InfoProductDetailInfo;
