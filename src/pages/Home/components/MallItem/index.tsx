import React from 'react';
import MallItemInner from '../MallItemInner';
import './style.scss';

interface Props {
  brandImg: string;
  storeImg: string;
  name: string;
  description: string;
}

const MallItem: React.FC<Props> = (props) => {
  let { brandImg, storeImg, name, description } = props;
  return (
    <MallItemInner
      brandImg={brandImg}
      storeImg={storeImg}
      name={name}
      description={description}
    />
  );
};
export default MallItem;
