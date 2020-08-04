import { Collection } from 'Mocks/Collection';
import React from 'react';
import Item from './item';
import './style.scss';
// [1,2,3,4][Math.random()]
// const a = {a:1}    c="a"    a[c]
const collections: React.FC = () => {
  let results = Collection.map((item, index) => {
    return (
      <Item
        key={index}
        title={item.title}
        subtitle={item.subtitle}
        imageFirst={item.imageFirst}
        imageSecond={item.imageSecond}
        imageThird={item.imageThird}
      />
    );
  });
  return <div className='Collections'>{results}</div>;
};

export default collections;
