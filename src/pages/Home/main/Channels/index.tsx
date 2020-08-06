import { Channel } from 'Mocks/Channel';
import React from 'react';
import ChanelItem from '../../components/ChannelItem';
import './style.scss';

const Channels: React.FC = () => {
  let chanelItem = Channel.map((item, index) => {
    return (
      <ChanelItem
        key={index}
        image={item.image}
        name={item.name}
        colorFont={item.colorFont}
        link={''}
      />
    );
  });
  return <div className='chanel-wrappper'>{chanelItem}</div>;
};

export default Channels;
