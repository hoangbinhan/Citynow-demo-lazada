import { products } from '../constants/types/productsType';
import axios from 'axios';
import * as types from 'constants/types/actionType';
import { Dispatch } from 'react';

export const fetchProducts = () => (dispatch: Dispatch<products>) => {
  axios
    .get('http://localhost:8080/products')
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
