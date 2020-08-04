import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
import { product } from 'constants/types/productsType';

interface Props {
  product: product;
}

const CartItemProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className='CartItem__Body-product'>
      <input
        className='CartItem__Body-product-checkbox'
        type='checkbox'
        name=''
        id=''
      />
      <div className='CartItem__Body-product-image'>
        <img src={product.imageUrl} />
      </div>
      <div className='CartItem__Body-product-info'>
        <h3>{product.name}</h3>
        <p>{product.ip_address}</p>
      </div>
    </div>
  );
};

export default CartItemProduct;
