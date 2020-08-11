import React from 'react';
import './style.scss';
import Inner2Supplement from 'base/Footer/atom/Inner2Supplement';
import Inner2App from 'base/Footer/atom/Inner2App';
import Inner2Icon from 'base/Footer/atom/Inner2Icon';
import Inner2Text from 'base/Footer/atom/Inner2Text';

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
        <Inner2Icon icon={download.icon} />
        <Inner2Text download={download} />
        <Inner2App image={download.appStore} />
        <Inner2App image={download.googlePlay} />
      </div>
      <Inner2Supplement supplement={supplement} />
    </div>
  );
};

export default InnerWidth2;
