import { product } from 'constants/types/productsType';
import InfoProduct from 'pages/DetailProduct/components/InfoProduct';
import React from 'react';
import './style.scss';

interface Props {
  product: product;
}

const Info: React.FC<Props> = (props) => {
  let { product } = props;

  return (
    <div className='main-info'>
      <img src={product.imageUrl} alt={product.name} className='image' />
      <InfoProduct product={product} />
    </div>
  );
};

export default Info;
