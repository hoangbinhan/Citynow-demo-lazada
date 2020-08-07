import React from 'react';
import './style.scss';
import { product } from 'constants/types/productsType';
import { useDispatch } from 'react-redux';
import { deleteItemInCart } from 'actions/cart';
import PopupInner from '../PopupInner';

interface Props {
  product: product;
  isPopup: boolean;
  isDelete: boolean;
  onClose: () => void;
}
const Popup: React.FC<Props> = (props) => {
  const { onClose, isPopup, isDelete, product } = props;

  const dispatch = useDispatch();
  const action = deleteItemInCart(product.id);

  const onDeleteOrMove = (id: string) => {
    console.log('id :>> ', id);
    dispatch(action);
    onClose();
  };

  return (
    <div className='popup' style={{ display: isPopup ? 'flex' : 'none' }}>
      {/* <PopupInner onClose={onClose} isDelete={isDelete} product={product} /> */}
      <PopupInner {...{ onClose, product, isDelete }} />
      {/* <div className='popup__inner'>
        <div className='popup__inner-header'>
          {isDelete ? 'Remove from cart' : 'Move To Wishlist'}
        </div>
        <div className='popup__inner-body'>
          {isDelete
            ? 'Item(s) will be removed from order'
            : 'Item(s) will be moved to wishlist and removed from cart.'}
        </div>
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
      </div> */}
    </div>
  );
};

export default Popup;
