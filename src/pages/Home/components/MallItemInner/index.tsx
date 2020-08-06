import MallItemInnerBrandImage from 'pages/Home/atom/MallItemInnerBrandImage';
import MallItemInnerStoreImage from 'pages/Home/atom/MallItemInnerStoreImage';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  brandImg: string;
  storeImg: string;
  name: string;
  description: string;
}

const MallItemInner: React.FC<Props> = (props) => {
  let { brandImg, storeImg, name, description } = props;
  return (
    <Link to='/' className='mall-item hp-mod-card-hover'>
      <MallItemInnerBrandImage brandImg={brandImg} />
      <MallItemInnerStoreImage storeImg={storeImg} />
      <div className='mall-item__stores-brand'>{name}</div>
      <p className='mall-item__stores-description'>{description}</p>
    </Link>
  );
};
export default MallItemInner;
