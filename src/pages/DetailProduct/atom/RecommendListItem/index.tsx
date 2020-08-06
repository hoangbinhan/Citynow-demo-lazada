import { product } from 'constants/types/productsType';
import React from 'react';

interface Props {
  post: product;
  handleClick: Function;
}

const RecommendListItem: React.FC<Props> = (props) => {
  const { post, handleClick } = props;

  return (
    <li className='RecommendList__item' onClick={() => handleClick(post)}>
      <img src={post.imageUrl} />
    </li>
  );
};

export default RecommendListItem;
