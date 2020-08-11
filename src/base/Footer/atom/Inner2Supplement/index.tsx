import React from 'react';
import './style.scss';

interface Props {
  supplement: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

const Inner2Supplement: React.FC<Props> = (props) => {
  const { supplement } = props;
  return (
    <div className='InnerWidth2__supplement'>
      <div>{supplement.first}</div>
      <div>{supplement.second}</div>
      <div>{supplement.third}</div>
      <div>{supplement.fourth}</div>
    </div>
  );
};

export default Inner2Supplement;
