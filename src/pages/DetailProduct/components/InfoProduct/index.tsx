import { product } from 'constants/types/productsType';
import { RecommendProduct } from 'Mocks/Recommend';
import InfoProductDetail from 'pages/DetailProduct/components/InfoProductDetail';
import InfoProductNumberPicker from 'pages/DetailProduct/components/InfoProductNumberPicker';
import React, { useState } from 'react';
import InfoProductButtonBox from '../InfoProductButtonBox';
import Recommend from '../Recommend';
import InfoProductPromotion from 'pages/DetailProduct/atom/InfoProductPromotion';

interface Props {
  product: product;
}

const InfoProduct: React.FC<Props> = (props) => {
  const [quantity, setQuantity] = useState(1);
  let { product } = props;

  function onChangeNumber(type: string) {
    if (type === 'decrease') {
      setQuantity(quantity - 1);
    } else if (type === 'increase') {
      setQuantity(quantity + 1);
    }
    return;
  }

  return (
    <div className='product-detail'>
      <InfoProductDetail product={product} />
      <InfoProductPromotion />
      <InfoProductNumberPicker
        quantity={quantity}
        changeNumber={onChangeNumber}
      />
      <InfoProductButtonBox quantity={quantity} />
      <Recommend recommendProduct={RecommendProduct} />
    </div>
  );
};

export default InfoProduct;
