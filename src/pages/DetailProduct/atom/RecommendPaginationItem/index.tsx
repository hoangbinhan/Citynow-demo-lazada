import React from 'react';

interface Props {
  className: string;
  content: any;
  paginate: Function;
  currentPage: number;
}

const RecommendPaginationItem: React.FC<Props> = (props) => {
  const { className, content, paginate, currentPage } = props;

  return (
    <li className={className} onClick={() => paginate(currentPage - 1)}>
      {content}
    </li>
  );
};

export default RecommendPaginationItem;
