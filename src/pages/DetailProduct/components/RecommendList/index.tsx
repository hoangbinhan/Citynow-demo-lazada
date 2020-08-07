import React from 'react';
import './style.scss';
import { product } from 'constants/types/productsType';
import RecommendListItem from 'pages/DetailProduct/atom/RecommendListItem';

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
      {posts.map((post, index) => (
        <RecommendListItem key={index} post={post} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default RecommendList;
