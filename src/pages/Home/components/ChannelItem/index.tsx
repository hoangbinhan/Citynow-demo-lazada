import 'common/style.scss';
import ChannelItemInner from 'pages/Home/atom/ChannelItemInner';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

interface Props {
  image: string;
  name: string;
  link: string;
  colorFont: string;
}

const ChannelItem: React.FC<Props> = (props) => {
  const { image, name, link, colorFont } = props;
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(true);
  }
  function toggleLeave() {
    setHover(false);
  }

  return (
    <div className='chanel'>
      <Link
        to={link}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleLeave}
        style={hover ? { color: colorFont } : { color: 'black' }}
        className='chanel__link'
      >
        <ChannelItemInner image={image} name={name} />
      </Link>
    </div>
  );
};

export default ChannelItem;
