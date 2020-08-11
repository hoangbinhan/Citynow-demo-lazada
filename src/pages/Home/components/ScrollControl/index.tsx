import React from 'react';
import './style.scss';
import { ScrollControlData } from 'Mocks/ScrollControl';
import ScrollControlItem from 'pages/Home/atom/ScrollControlItem';

const ScrollControl: React.FC = () => {
  const result = ScrollControlData.map((i) => (
    <ScrollControlItem icon={i.icon} content={i.content} id={i.id} />
  ));
  console.log('ScrollControlData :>> ', ScrollControlData);
  return <ul className='scrollControl'>{result}</ul>;
};

export default ScrollControl;
