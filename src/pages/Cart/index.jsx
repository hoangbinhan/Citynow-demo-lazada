import { getCartItem } from 'actions/cart';
import CartConfirm from 'pages/Cart/components/CartConfirm';
import CartItem from 'pages/Cart/components/CartItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

export default function Cart() {
  const dispatch = useDispatch();
  const action = getCartItem;
  const number = useSelector((state) => state.cart.number);
  const products = useSelector((state) => state.cart.productId);
  const listProduct = useSelector((state) => state.products.product);

  const getProductInCart = (products, cart) => {
    let result = [];
    for (let i = 0; i < cart.length; i++) {
      let temp = products.find((item) => {
        return item.id === cart[i].productId;
      });
      let obj = { product: { ...temp }, quantity: cart[i].quantity };
      result.push(obj);
    }
    return result;
  };
  useEffect(() => {
    dispatch(action);
    return () => {};
  }, [dispatch, number]);

  const showCartItem = (products) => {
    let result = [];
    if (products.length > 0) {
      result = products.map((item, index) => {
        return (
          <CartItem
            key={index}
            product={item.product}
            quantity={item.quantity}
          />
        );
      });
    }
    return result;
  };

  let listProductsCart = getProductInCart(listProduct, products);
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
