import React from 'react';
import Banner from './Banner';
import Inner from './Inner';
import './style.scss';

const images = [
  '//img.alicdn.com/tfs/TB1yhWyueL2gK0jSZPhXXahvXXa-776-194.png',
  '//img.alicdn.com/tfs/TB11L1Eubj1gK0jSZFuXXcrHpXa-776-194.png',
  '//img.alicdn.com/tfs/TB1pQmAueH2gK0jSZFEXXcqMpXa-776-194.png',
];

const FooterFirst: React.FC = (props) => {
  const result = images.map((item, index) => {
    return <Banner key={index} image={item} link='/' />;
  });
  return (
    <div className='footerFirst'>
      <div className='footerFirst__banner'>{result}</div>
      <Inner />
    </div>
  );
};

export default FooterFirst;
