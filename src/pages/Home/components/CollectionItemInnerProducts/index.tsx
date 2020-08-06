import CollectionItemInnerImage from 'pages/Home/atom/CollectionItemInnerImage';
import React from 'react';

interface Props {
  imageFirst: string;
  imageSecond: string;
  imageThird: string;
}

const CollectionItemInnerProducts: React.FC<Props> = (props) => {
  const { imageFirst, imageSecond, imageThird } = props;
  return (
    <div className='collection__link-products'>
      <CollectionItemInnerImage image={imageFirst} />
      <CollectionItemInnerImage image={imageSecond} />
      <CollectionItemInnerImage image={imageThird} />
    </div>
  );
};

export default CollectionItemInnerProducts;
