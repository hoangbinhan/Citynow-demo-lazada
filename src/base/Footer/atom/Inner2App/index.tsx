import React from 'react';
import './style.scss';

interface Props {
  image: string;
}

const Inner2App: React.FC<Props> = (props) => {
  const { image } = props;
  return (
    <div className='InnerWidth2__download-app'>
      <img src={image} alt={image} />
    </div>
  );
};

export default Inner2App;
