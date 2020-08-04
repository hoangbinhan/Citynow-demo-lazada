import React from 'react';
import './style.scss';
import { product } from 'constants/types/productsType';

interface Props {
  posts: product[];
  loading: boolean;
  handleClick: Function;
}

const RecommendList: React.FC<Props> = (props) => {
  const { posts, loading, handleClick } = props;
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className='RecommendList'>
      {posts.map((post) => (
        <li
          key={post.id}
          className='RecommendList__item'
          onClick={() => handleClick(post)}
        >
          <img src={post.imageUrl} />
        </li>
      ))}
    </div>
  );
};

export default RecommendList;
