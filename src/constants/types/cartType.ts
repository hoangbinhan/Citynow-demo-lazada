export type AddToCart = {
  type: string;
  payload: {};
};

export type DeleteItemInCart = {
  type: string;
  payload: {};
};

export interface productId {
  productId: string;
  quantity: number;
}

export interface AddToCartAction {
  type: string;
  payload: productId;
}

export interface ChangeNumberItemAction {
  type: string;
  payload: {
    productId: string;
    number: number;
  };
}
