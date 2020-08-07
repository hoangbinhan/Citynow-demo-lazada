import { Collection } from 'Mocks/Collection';
import React from 'react';
import Item from '../../components/Collectionitem';
import './style.scss';

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
