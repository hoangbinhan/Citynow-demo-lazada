import { deleteItemInCart } from 'actions/cart';
import { product } from 'constants/types/productsType';
import PopupInnerBody from 'pages/Cart/atoms/PopupInnerBody';
import PopupInnerHeader from 'pages/Cart/atoms/PopupInnerHeader';
import PopupInnerFooter from 'pages/Cart/atoms/PopupInnerFooter';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  product: product;
  isDelete: boolean;
  onClose: () => void;
}
const PopupInner: React.FC<Props> = (props) => {
  const { onClose, isDelete, product } = props;

  return (
    <div className='popup__inner'>
      <PopupInnerHeader {...{ isDelete }} />
      <PopupInnerBody {...{ isDelete }} />
      <PopupInnerFooter {...{ onClose, isDelete, product }} />
    </div>
  );
};

export default PopupInner;
