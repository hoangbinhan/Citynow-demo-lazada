import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const middleware = [thunk];
const intialState = {};

const store = createStore(
  rootReducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
