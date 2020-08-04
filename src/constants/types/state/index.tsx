import { productId } from '../cartType';
import { product } from '../productsType';

export type cartState = {
  productId: productId[];
  number: number;
};

export type productsState = {
  product: product[];
};
