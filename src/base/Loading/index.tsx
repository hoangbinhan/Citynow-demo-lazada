import React from 'react';
import loading from 'assets/picture/loading.gif';
import './style.scss';

const Loading: React.FC = () => {
  return (
    <div className='loading'>
      <img src={loading} />
    </div>
  );
};

export default Loading;
