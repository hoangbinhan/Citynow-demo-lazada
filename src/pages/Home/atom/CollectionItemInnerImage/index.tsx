import React from 'react';

interface Props {
  image: string;
}

const CollectionItemInnerImage: React.FC<Props> = (props) => {
  const { image } = props;
  return (
    <div className='collection__link-products-image'>
      <img src={image} className='image' alt={image} />
    </div>
  );
};

export default CollectionItemInnerImage;
