import { Populars } from 'Mocks/Populars';
import React from 'react';
import Item from '../../components/PopularItem';
import './style.scss';

const Popular: React.FC = () => {
  let results = Populars.map((item, index) => {
    let isLeft = false;
    if (index === 0) {
      isLeft = false;
    }
    return (
      <Item
        isLeft={isLeft}
        key={index}
        image={item.image}
        name={item.name}
        count={item.count}
      />
    );
  });

  return (
    <div className='popular'>
      <div className='popular__left'>{results.shift()}</div>
      <div className='popular__right'>{results.slice(0, results.length)}</div>
    </div>
  );
};

export default Popular;
