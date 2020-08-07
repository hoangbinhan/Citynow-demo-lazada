import { product } from 'constants/types/productsType';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Popup from 'pages/Cart/components/Popup';
import { deleteItemInCart } from 'actions/cart';

interface Props {
  product: product;
}

const CartItemBodyPriceControl: React.FC<Props> = ({ product }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [isDelete, setisDelete] = useState(true);

  const onDelete = () => {
    setisDelete(true);
    setIsPopup(true);
  };
  const onMove = () => {
    setisDelete(false);
    setIsPopup(true);
  };

  const showPopUp = () => {
    setIsPopup(!isPopup);
  };
  const onClosePopup = () => {
    setIsPopup(false);
  };

  return (
    <div className='CartItem__Body-pricebox-control'>
      <i className='far fa-heart' onClick={onMove}></i>
      <i className='fas fa-trash' onClick={onDelete}></i>
      <Popup
        product={product}
        onClose={onClosePopup}
        isPopup={isPopup}
        isDelete={isDelete}
      />
    </div>
  );
};

export default CartItemBodyPriceControl;
