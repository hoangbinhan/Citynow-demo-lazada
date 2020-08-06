import { product } from 'constants/types/productsType';
import React, { useState } from 'react';

import './style.scss';
import RecommendList from 'pages/DetailProduct/components/RecommendList';
import RecommendPagination from 'pages/DetailProduct/components/RecommendPagination';
import RecommendChoice from 'pages/DetailProduct/components/RecommendChoice';

interface Props {
  recommendProduct: product[];
}

const Recommend: React.FC<Props> = (props) => {
  const { recommendProduct } = props;
  const [posts, setPosts] = useState(recommendProduct);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const [tempRecommendChoice, setTempRecommendChoice] = useState(Array());

  const paginate = (pageNumber: number) => {
    if (pageNumber < 1) return;
    else if (pageNumber > Math.ceil(posts.length / postsPerPage)) return;
    setCurrentPage(pageNumber);
  };

  const handleClick = (value: product) => {
    let temp = [...tempRecommendChoice];
    temp.push(value);
    const result = new Set(temp);
    setTempRecommendChoice([...Array.from(result)]);
  };

  const deleteItem = (value: product) => {
    let temp = [...tempRecommendChoice];
    const result = temp.filter((item) => item.id !== value.id);
    setTempRecommendChoice([...result]);
  };

  return (
    <div className='Recommend'>
      <p className='Recommend__title'>Thường được mua kèm</p>
      <RecommendList
        posts={currentPosts}
        loading={loading}
        handleClick={handleClick}
      />
      <RecommendPagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <RecommendChoice item={tempRecommendChoice} deleteItem={deleteItem} />
    </div>
  );
};

export default Recommend;
