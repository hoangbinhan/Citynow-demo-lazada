import React from 'react';

interface Props {
  brandImg: string;
}

const MallItemInnerBrandImage: React.FC<Props> = (props) => {
  let { brandImg } = props;
  return (
    <div className='mall-item__brand'>
      <img src={brandImg} alt='' className='image' />
    </div>
  );
};
export default MallItemInnerBrandImage;
