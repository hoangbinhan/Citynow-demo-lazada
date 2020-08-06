import useEventListener from 'hooks/use-event-listener';
import React, { useCallback } from 'react';
import './style.scss';
import RecommendPaginationItem from 'pages/DetailProduct/atom/RecommendPaginationItem';
import RecommendPaginationList from '../RecommendPaginationList';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
  currentPage: number;
}

const RecommendPagination: React.FC<Props> = (props) => {
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

  return (
    <div className='Recommend__pagination'>
      <RecommendPaginationList
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default RecommendPagination;
