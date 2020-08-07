import React from 'react';

interface Props {
  storeImg: string;
}

const MallItemInnerStoreImage: React.FC<Props> = (props) => {
  let { storeImg } = props;
  return (
    <div className='mall-item__shop'>
      <img src={storeImg} alt='' className='image' />
    </div>
  );
};
export default MallItemInnerStoreImage;
