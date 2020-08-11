import React from 'react';
import './style.scss';

interface Props {
  title: string;
  list: string[];
}

const InnerWidth1: React.FC<Props> = (props) => {
  const { title, list } = props;
  const resultList = list.map((item, index) => {
    return (
      <li key={index} className='InnerWidth1__list-li'>
        {item}
      </li>
    );
  });
  return (
    <div className='InnerWidth1'>
      <h3 className='InnerWidth1__title'>{title}</h3>
      <ul className='InnerWidth1__list'>{resultList}</ul>
    </div>
  );
};

export default InnerWidth1;
