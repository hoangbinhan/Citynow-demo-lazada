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
  supplement: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

const InnerWidth2: React.FC<Props> = (props) => {
  const { download, supplement } = props;
  return (
    <div className='InnerWidth2'>
      <div className='InnerWidth2__download'>
        <div className='InnerWidth2__download-icon'>
          <img src={download.icon} alt='' />
        </div>
        <div className='InnerWidth2__download-text'>
          <div className='InnerWidth2__download-text-title'>
            {download.title}
          </div>
          <div className='InnerWidth2__download-text-description'>
            {download.description}
          </div>
        </div>
        <div className='InnerWidth2__download-app'>
          <img src={download.appStore} alt='' />
        </div>
        <div className='InnerWidth2__download-app'>
          <img src={download.googlePlay} alt='' />
        </div>
      </div>
      <div className='InnerWidth2__supplement'>
        <div>{supplement.first}</div>
        <div>{supplement.second}</div>
        <div>{supplement.third}</div>
        <div>{supplement.fourth}</div>
      </div>
    </div>
  );
};

export default InnerWidth2;
