import React from 'react';

interface Props {
  image: string;
}

const ItemInnerImage: React.FC<Props> = (props) => {
  const { image } = props;

  return (
    <div className='cardContent-img-container'>
      <img src={image} alt='' className='cardContent-img' />
    </div>
  );
};

export default ItemInnerImage;
