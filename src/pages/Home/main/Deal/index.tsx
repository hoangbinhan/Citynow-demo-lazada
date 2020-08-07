import { Deals } from 'Mocks/Deals';
import React from 'react';
import CardContent from '../../components/Item';
import DealHeader from '../../components/DealHeader';
import './style.scss';

const Deal: React.FC = () => {
  let results = Deals.map((item, index) => {
    return (
      <CardContent
        key={index}
        id={index + ''}
        image={item.image}
        title={item.title}
        price={item.price}
        currentPrice={item.currentPrice}
      />
    );
  });
  return (
    <div className='deal'>
      <DealHeader status='Đang bán' />
      <div className='deal__body'>{results}</div>
    </div>
  );
};

export default Deal;
