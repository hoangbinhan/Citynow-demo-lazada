import { deleteItemInCart } from 'actions/cart';
import { product } from 'constants/types/productsType';
import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

interface Props {
  product: product;
}

const CartItemPrice: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const onDelete = (productId: string) => {
    const action = deleteItemInCart(productId);
    dispatch(action);
  };

  return (
    <div className='CartItem__Body-pricebox'>
      <h1 className='CartItem__Body-pricebox-price'>{product.price}đ</h1>
      <h2 className='CartItem__Body-pricebox-oldprice'>{product.oldPrice}đ</h2>
      <p className='CartItem__Body-pricebox-discount'>25</p>
      <div className='CartItem__Body-pricebox-control'>
        <i className='far fa-heart'></i>
        <i className='fas fa-trash' onClick={() => onDelete(product.id)}></i>
      </div>
    </div>
  );
};

export default CartItemPrice;
