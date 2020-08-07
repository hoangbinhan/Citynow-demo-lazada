import { Malls } from 'Mocks/Malls';
import React from 'react';
import Item from '../../components/MallItem';
import './style.scss';

const Mall: React.FC = () => {
  let results = Malls.map((item, index) => {
    return (
      <Item
        key={index}
        brandImg={item.brandImg}
        storeImg={item.storeImg}
        name={item.name}
        description={item.description}
      />
    );
  });

  return <div className='store'>{results}</div>;
};

export default Mall;
