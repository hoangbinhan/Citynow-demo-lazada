import React from 'react';
import './style.scss';

interface Props {
  onLoadMore: () => void;
}

const ButtonLoadMore: React.FC<Props> = ({ onLoadMore }) => {
  return (
    <div className='ButtonLoadMore noselect '>
      <div className='ButtonLoadMore-btn' onClick={onLoadMore}>
        TẢI THÊM
      </div>
    </div>
  );
};

export default ButtonLoadMore;
