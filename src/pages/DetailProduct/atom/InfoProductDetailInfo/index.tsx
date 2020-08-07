import { product } from 'constants/types/productsType';
import React from 'react';

interface Props {
  product: product;
}

const InfoProductDetailInfo: React.FC<Props> = (props) => {
  let { product } = props;

  return (
    <>
      <div className='title'>{product.name}</div>
      <div className='rating'>19 đánh giá16 câu hỏi đã trả lời</div>
      <div className='brand'>Thương hiệu:OEMXem thêm Xe máy của OEM</div>
    </>
  );
};

export default InfoProductDetailInfo;
