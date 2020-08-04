import { changeNumberItem } from 'actions/cart';
import { product } from 'constants/types/productsType';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CartItemPrice from './CartItemPrice';
import CartItemProduct from './CartItemProduct';
import './style.scss';

interface Props {
  product: product;
  quantity: number;
}

const CartItemBody: React.FC<Props> = ({ product, quantity }) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(quantity);
  function changeNumber(type: string) {
    if (type === 'decrease') {
      const action = changeNumberItem(product.id, -1);
      dispatch(action);
      setNumber(number - 1);
    } else if (type === 'increase') {
      const action = changeNumberItem(product.id, 1);
      dispatch(action);
      setNumber(number + 1);
    }
    return;
  }

  return (
    <div className='CartItem__Body'>
      <CartItemProduct product={product} />
      <CartItemPrice product={product} />

      <div className='numberPicker'>
        <div
          className='next-number-handle'
          style={{ pointerEvents: number === 1 ? 'none' : 'auto' }}
          onClick={() => changeNumber('decrease')}
        >
          -
        </div>
        <div className='number-input'>{number}</div>
        <div
          className='next-number-handle'
          onClick={() => changeNumber('increase')}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItemBody;
