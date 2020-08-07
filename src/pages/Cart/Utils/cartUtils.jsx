import React from 'react';
import CartItem from '../components/CartItem';

export const getProductInCart = (products, cart) => {
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

export const showCartItem = (products) => {
  let result = [];
  if (products.length > 0) {
    result = products.map((item, index) => {
      return (
        <CartItem key={index} product={item.product} quantity={item.quantity} />
      );
    });
  }
  return result;
};

export const subTotal = (listProducts) => {
  let result = listProducts.reduce((currentTotal, item) => {
    return currentTotal + parseInt(item.product.price) * item.quantity;
  }, 0);
  return Math.round(result * 100) / 100;
};
