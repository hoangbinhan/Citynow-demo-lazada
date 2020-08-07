import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import CollectionItemInner from 'pages/Home/components/CollectionItemInner';

interface Props {
  title: string;
  subtitle: string;
  imageFirst: string;
  imageSecond: string;
  imageThird: string;
}

const item: React.FC<Props> = (props) => {
  const { title, subtitle, imageFirst, imageSecond, imageThird } = props;
  return (
    <div className='collection hp-mod-card-hover'>
      <CollectionItemInner
        title={title}
        subtitle={subtitle}
        imageFirst={imageFirst}
        imageSecond={imageSecond}
        imageThird={imageThird}
      />
    </div>
  );
};

export default item;
