import { deleteItemInCart } from 'actions/cart';
import { product } from 'constants/types/productsType';
import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import CartItemBodyPriceText from 'pages/Cart/atoms/CartItemBodyPriceText';
import CartItemBodyPriceControl from 'pages/Cart/atoms/CartItemBodyPriceControl';

interface Props {
  product: product;
}

const CartItemBodyPrice: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const onDelete = (productId: string) => {
    const action = deleteItemInCart(productId);
    dispatch(action);
  };

  return (
    <div className='CartItem__Body-pricebox'>
      <CartItemBodyPriceText product={product} />
      <CartItemBodyPriceControl product={product} onDelete={onDelete} />
    </div>
  );
};

export default CartItemBodyPrice;
