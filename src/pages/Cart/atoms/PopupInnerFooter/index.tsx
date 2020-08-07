import { deleteItemInCart } from 'actions/cart';
import { product } from 'constants/types/productsType';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  product: product;
  isDelete: boolean;
  onClose: () => void;
}
const PopupInnerFooter: React.FC<Props> = (props) => {
  const { onClose, isDelete, product } = props;

  const dispatch = useDispatch();
  const action = deleteItemInCart(product.id);

  const onDeleteOrMove = (id: string) => {
    dispatch(action);
    onClose();
  };

  return (
    <div className='popup__inner-footer'>
      <button className='popup__inner-footer-btn default' onClick={onClose}>
        CANCEL
      </button>
      <button
        className='popup__inner-footer-btn primary'
        onClick={() => onDeleteOrMove(product.id)}
      >
        {isDelete ? 'DELETE' : 'MOVE'}
      </button>
    </div>
  );
};

export default PopupInnerFooter;
