import React from 'react';
import './style.scss';

interface Props {
  download: {
    icon: string;
    title: string;
    description: string;
    appStore: string;
    googlePlay: string;
  };
}

const Inner2Text: React.FC<Props> = (props) => {
  const { download } = props;
  return (
    <div className='InnerWidth2__download-text'>
      <div className='InnerWidth2__download-text-title'>{download.title}</div>
      <div className='InnerWidth2__download-text-description'>
        {download.description}
      </div>
    </div>
  );
};

export default Inner2Text;
