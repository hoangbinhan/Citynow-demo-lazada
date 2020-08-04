import { numberCart } from './../constants/types/navbarType';
import { Dispatch } from 'react';
import * as types from 'constants/types/actionType';

export const getNumber = () => (dispatch: Dispatch<numberCart>) => {
  dispatch({
    type: types.GET_NUMBER_CART,
  });
};
