import PopularItemInner from 'pages/Home/atom/PopularItemInner';
import React from 'react';
import './style.scss';

interface Props {
  isLeft: boolean;
  image: string;
  name: string;
  count: string;
}

const PopularItem: React.FC<Props> = ({ isLeft, image, name, count }) => {
  let itemClassName = isLeft
    ? 'popular-box-left hp-mod-card-hover'
    : 'popular-box hp-mod-card-hover';

  return (
    <div className={itemClassName}>
      <PopularItemInner image={image} name={name} count={count} />
    </div>
  );
};

export default PopularItem;
