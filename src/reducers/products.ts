import { products } from './../constants/types/productsType';
import * as type from 'constants/types/actionType';
import { productsState } from 'constants/types/state';

const initialState: productsState = {
  product: [],
};

export default (state = initialState, action: products) => {
  switch (action.type) {
    case type.FETCH_PRODUCTS:
      return {
        ...state,
        product: [...action.payload],
      };
    default:
      return state;
  }
};
