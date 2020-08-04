import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';

const rootReducer = combineReducers({
  cart,
  products,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
