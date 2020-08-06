import React from 'react';

interface Props {
  content: string;
  handleClick: Function;
  productId: string;
}
const ContextMenuButton: React.FC<Props> = (props) => {
  const { content, handleClick, productId } = props;
  return (
    <button
      className='context-menu__btn'
      onClick={() => handleClick(productId)}
    >
      {content}
    </button>
  );
};

export default ContextMenuButton;
