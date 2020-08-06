import 'common/style.scss';
import React from 'react';

interface Props {
  image: string;
  name: string;
}

const ChannelItemInner: React.FC<Props> = ({ image, name }) => {
  return (
    <>
      <img src={image} alt='' className='chanel__link-icon' />
      {name}
      <i className='fas fa-chevron-right'></i>
    </>
  );
};

export default ChannelItemInner;
