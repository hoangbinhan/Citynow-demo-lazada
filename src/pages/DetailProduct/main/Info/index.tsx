import { product } from 'constants/types/productsType';
import InfoProduct from 'pages/DetailProduct/components/InfoProduct';
import React, { useState } from 'react';
import './style.scss';

interface Props {
  product: product;
}

const Info: React.FC<Props> = (props) => {
  const [quantity, setQuantity] = useState(1);
  let { product } = props;

  return (
    <div className='main-info'>
      <img src={product.imageUrl} alt='' className='image' />
      <InfoProduct product={product} />
    </div>
  );
};

export default Info;
