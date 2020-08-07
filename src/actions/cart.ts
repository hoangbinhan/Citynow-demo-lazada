import { products } from './../constants/types/productsType';
import { AddToCart, DeleteItemInCart } from './../constants/types/cartType';
import { Dispatch } from 'react';
import * as type from 'constants/types/actionType';
import axios from 'axios';

export const getCartItem = () => (dispatch: Dispatch<{ type: string }>) => {
  dispatch({
    type: type.GET_CART_ITEM,
  });
};

export const addToCart = (productId: string, quantity: number) => (
  dispatch: Dispatch<AddToCart>
) => {
  dispatch({
    type: type.ADD_TO_CART,
    payload: { productId, quantity },
  });
};

export const changeNumberItem = (productId: string, number: number) => (
  dispatch: Dispatch<AddToCart>
) => {
  dispatch({
    type: type.CHANGE_NUMBER_ITEM,
    payload: {
      productId,
      quantity: number,
    },
  });
};

export const deleteItemInCart = (productId: String) => (
  dispatch: Dispatch<DeleteItemInCart>
) => {
  dispatch({
    type: type.DELETE_ITEM_IN_CART,
    payload: {
      productId: productId,
    },
  });
};

export const fetchProducts = (cart: []) => (dispatch: Dispatch<products>) => {
  axios
    .get('http://localhost:8080/products')
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: type.FETCH_PRODUCTS,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
