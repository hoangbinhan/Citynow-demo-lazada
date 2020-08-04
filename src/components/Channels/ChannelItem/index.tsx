import React, { useState } from 'react';
import './style.scss';
import 'common/style.scss';

interface Props {
  image: string;
  name: string;
  link: string;
  colorFont: string;
}

const ChanelItem: React.FC<Props> = ({ image, name, link, colorFont }) => {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(true);
  }
  function toggleLeave() {
    setHover(false);
  }

  return (
    <div className='chanel'>
      <a
        href={link}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleLeave}
        style={hover ? { color: colorFont } : { color: 'black' }}
        className='chanel__link'
      >
        <img src={image} alt='' className='chanel__link-icon' />
        {name}
        <i className='fas fa-chevron-right'></i>
      </a>
    </div>
  );
};

export default ChanelItem;
