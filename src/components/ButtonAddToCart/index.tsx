import React from 'react';
import './style.scss';
import { addToCart } from 'actions/cart';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

interface Props {
  quantity: number;
}

const ButtonAddToCart: React.FC<Props> = ({ quantity }) => {
  const dispatch = useDispatch();

  const addNew = (productId: string, quantity: number) => {
    try {
      const action = addToCart(productId, quantity);
      dispatch(action);
      console.log('da them vao gio hang thanh cong ');
    } catch (err) {
      console.log('err :>> ', err);
    }
  };
  const { id } = useParams();
  return (
    <div
      className='button__addToCart'
      onClick={() => {
        addNew(id, quantity);
      }}
    >
      Thêm vào giỏ hàng
    </div>
  );
};

export default ButtonAddToCart;
