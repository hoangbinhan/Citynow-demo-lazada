import useEventListener from 'hooks/use-event-listener';
import RecommendPaginationItem from 'pages/DetailProduct/atom/RecommendPaginationItem';
import React, { useCallback } from 'react';
import { Pagination } from 'antd';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
  currentPage: number;
}

const RecommendPaginationList: React.FC<Props> = (props) => {
  const { postsPerPage, totalPosts, paginate, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handler = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === 33) {
        paginate(currentPage + 1);
      } else if (e.keyCode === 34) {
        paginate(currentPage - 1);
      }
    },
    [currentPage]
  );

  useEventListener('keydown', handler);

  let pageItem = pageNumbers.map((number) => {
    let className =
      number === currentPage
        ? 'Recommend__pagination-ul-item  active'
        : 'Recommend__pagination-ul-item';
    return (
      <RecommendPaginationItem
        key={number}
        className={className}
        paginate={paginate}
        currentPage={number}
        content={number}
      />
    );
  });

  return (
    <ul className='Recommend__pagination-ul noselect'>
      <RecommendPaginationItem
        className='Recommend__pagination-ul-item'
        paginate={paginate}
        currentPage={currentPage - 1}
        content={<i className='fas fa-chevron-left'></i>}
      />
      {pageItem}
      <RecommendPaginationItem
        className='Recommend__pagination-ul-item'
        paginate={paginate}
        currentPage={currentPage + 1}
        content={<i className='fas fa-chevron-right'></i>}
      />
    </ul>
  );
};

export default RecommendPaginationList;
