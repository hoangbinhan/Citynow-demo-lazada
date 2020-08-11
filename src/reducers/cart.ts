import * as type from 'constants/types/actionType';
import { productId } from 'constants/types/cartType';
import { cartState } from 'constants/types/state';
import { AddToCartAction } from './../constants/types/cartType';

const cart = localStorage.getItem('CART_LAZADA');

const initialState: cartState = cart
  ? JSON.parse(cart)
  : {
      productId: [],
      number: 0,
    };

export default (state = initialState, action: AddToCartAction) => {
  console.log('state', state);
  let index = -1;
  switch (action.type) {
    case type.ADD_TO_CART:
      index = findProductInCart(state.productId, action.payload.productId);
      if (index !== -1) {
        state.productId[index].quantity += action.payload.quantity;
        state.number += action.payload.quantity;
      } else {
        state.number += action.payload.quantity;
        state.productId.push(action.payload);
      }
      localStorage.setItem('CART_LAZADA', JSON.stringify(state));
      return {
        ...state,
      };
    case type.GET_NUMBER_CART:
      return { ...state };
    case type.GET_CART_ITEM:
      console.log('state', state);
      return { ...state };
    case type.CHANGE_NUMBER_ITEM:
      index = findProductInCart(state.productId, action.payload.productId);
      if (index !== -1) {
        state.number += action.payload.quantity;
        state.productId[index].quantity += action.payload.quantity;
      }
      localStorage.setItem('CART_LAZADA', JSON.stringify(state));
      return {
        ...state,
      };

    case type.DELETE_ITEM_IN_CART:
      index = findProductInCart(state.productId, action.payload.productId);
      if (index !== -1) {
        state.number -= state.productId[index].quantity;
        state.productId.splice(index, 1);
      }
      localStorage.setItem('CART_LAZADA', JSON.stringify(state));
      return {
        ...state,
      };

    default:
      return state;
  }
};

const findProductInCart = (cart: productId[], product: string) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId === product) {
        index = i;
        break;
      }
    }
  }
  return index;
};
