import React from 'react';
import CollectionItemInnerProducts from '../CollectionItemInnerProducts';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  subtitle: string;
  imageFirst: string;
  imageSecond: string;
  imageThird: string;
}

const CollectionItemInner: React.FC<Props> = (props) => {
  const { title, subtitle, imageFirst, imageSecond, imageThird } = props;
  return (
    <Link to='/' className='collection__link'>
      <div className='collection__link-title'>{title}</div>
      <div className='collection__link-subtitle'>{subtitle}</div>
      <CollectionItemInnerProducts
        imageFirst={imageFirst}
        imageSecond={imageSecond}
        imageThird={imageThird}
      />
    </Link>
  );
};

export default CollectionItemInner;
