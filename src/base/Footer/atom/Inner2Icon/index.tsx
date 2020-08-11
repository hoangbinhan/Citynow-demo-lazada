import React from 'react';
import './style.scss';

interface Props {
  icon: string;
}

const Inner2Icon: React.FC<Props> = (props) => {
  const { icon } = props;
  return (
    <div className='InnerWidth2__download-icon'>
      <img src={icon} />
    </div>
  );
};

export default Inner2Icon;
