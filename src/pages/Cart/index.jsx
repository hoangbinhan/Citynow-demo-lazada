import { getCartItem } from 'actions/cart';
import CartConfirm from 'pages/Cart/main/CartConfirm';
import { getProductInCart, showCartItem } from 'pages/Cart/Utils/cartUtils';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

export default function Cart() {
  const dispatch = useDispatch();
  const action = getCartItem;
  const number = useSelector((state) => state.cart.number);
  const products = useSelector((state) => state.cart.productId);
  const listProduct = useSelector((state) => state.products.product);
  const listProductsCart = getProductInCart(listProduct, products);

  useEffect(() => {
    dispatch(action);
    return () => {};
  }, [dispatch, number]);

  if (number > 0) {
    return (
      <div className='cart grid'>
        <div className='cart__list-item'>{showCartItem(listProductsCart)}</div>
        <CartConfirm products={listProductsCart} />
      </div>
    );
  } else {
    return (
      <h1 className='Cart__noItem'>Không có sản phẩm nào trong giỏ hàng</h1>
    );
  }
}
