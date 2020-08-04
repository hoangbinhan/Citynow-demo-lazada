import * as type from 'constants/types/actionType';
import { productId } from 'constants/types/cartType';
import { cartState } from 'constants/types/state';
import { AddToCartAction } from './../constants/types/cartType';
import { stat } from 'fs';

const initialState: cartState = {
  productId: [],
  number: 0,
};

export default (state = initialState, action: AddToCartAction) => {
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
      return {
        ...state,
      };
    case type.GET_NUMBER_CART:
      return { ...state };
    case type.GET_CART_ITEM:
      return { ...state };
    case type.CHANGE_NUMBER_ITEM:
      index = findProductInCart(state.productId, action.payload.productId);
      if (index !== -1) {
        state.number += action.payload.quantity;
        state.productId[index].quantity += action.payload.quantity;
      }
      return {
        ...state,
      };

    case type.DELETE_ITEM_IN_CART:
      index = findProductInCart(state.productId, action.payload.productId);
      if (index !== -1) {
        state.number -= state.productId[index].quantity;
        state.productId.splice(index, 1);
      }
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
