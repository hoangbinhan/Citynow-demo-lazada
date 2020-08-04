import { Populars } from 'Mocks/Populars';
import React from 'react';
import Item from './items/item';
import './style.scss';

const Popular: React.FC = () => {
  let results = Populars.map((item, index) => {
    if (index === 0) {
      return (
        <Item
          isLeft={true}
          key={index}
          image={item.image}
          name={item.name}
          count={item.count}
        />
      );
    }
    return (
      <Item
        isLeft={false}
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
