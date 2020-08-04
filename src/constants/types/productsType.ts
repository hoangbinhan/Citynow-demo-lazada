export interface product {
  id: string;
  name: string;
  price: string;
  oldPrice: string;
  imageUrl: string;
  ip_address: string;
}
export interface productId {
  productId: string;
}
export interface productInCart {
  product: product;
  quantity: number;
}

export type products = {
  type: string;
  payload: product[];
};
