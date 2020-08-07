import React from 'react';

interface Props {
  isDelete: boolean;
}
const PopupInnerBody: React.FC<Props> = (props) => {
  const { isDelete } = props;

  return (
    <div className='popup__inner-body'>
      {isDelete
        ? 'Item(s) will be removed from order'
        : 'Item(s) will be moved to wishlist and removed from cart.'}
    </div>
  );
};

export default PopupInnerBody;
