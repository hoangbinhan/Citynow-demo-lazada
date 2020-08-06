import { product } from 'constants/types/productsType';
import InfoProductDetailInfo from 'pages/DetailProduct/atom/InfoProductDetailInfo';
import InfoProductDetailPrice from 'pages/DetailProduct/atom/InfoProductDetailPrice';
import React from 'react';

interface Props {
  product: product;
}

const InfoProductDetail: React.FC<Props> = (props) => {
  let { product } = props;

  return (
    <>
      <InfoProductDetailInfo product={product} />
      <InfoProductDetailPrice product={product} />
    </>
  );
};

export default InfoProductDetail;
