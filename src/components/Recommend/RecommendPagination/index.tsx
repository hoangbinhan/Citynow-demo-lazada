import useEventListener from 'hooks/use-event-listener';
import React, { useCallback } from 'react';
import './style.scss';

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
  // const handler = useCallback((e: KeyboardEvent) => {
  //   // e.preventDefault();
  //   // if (e.keyCode == 33) {
  //   //   paginate(currentPage + 1);
  //   // } else if (e.keyCode == 34) {
  //   //   paginate(currentPage - 1);
  //   // }
  // });
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
    <ul className='Recommend__pagination-ul noselect'>
      {/* <li className='Recommend__pagination-ul-item' onClick={() => paginate(1)}>
        first
      </li> */}
      <li
        className='Recommend__pagination-ul-item'
        onClick={() => paginate(currentPage - 1)}
      >
        <i className='fas fa-chevron-left'></i>
      </li>

      {pageNumbers.map((number) =>
        number === currentPage ? (
          <li
            key={number}
            className='Recommend__pagination-ul-item  active'
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ) : (
          <li
            key={number}
            className='Recommend__pagination-ul-item '
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        )
      )}
      <li
        className='Recommend__pagination-ul-item'
        onClick={() => paginate(currentPage + 1)}
      >
        <i className='fas fa-chevron-right'></i>
      </li>
      {/* <li
        className='Recommend__pagination-ul-item'
        onClick={() => paginate(pageNumbers.length)}
      >
        end
      </li> */}
    </ul>
  );
};

export default RecommendPagination;
