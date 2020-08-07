import React from 'react';

interface Props {
  isDelete: boolean;
}
const PopupInnerHeader: React.FC<Props> = (props) => {
  const { isDelete } = props;

  return (
    <div className='popup__inner-header'>
      {isDelete ? 'Remove from cart' : 'Move To Wishlist'}
    </div>
  );
};

export default PopupInnerHeader;
