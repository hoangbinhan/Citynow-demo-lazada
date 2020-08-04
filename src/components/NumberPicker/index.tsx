import React, { useState } from 'react';
import './style.scss';

interface Props {
  number: number;
  handleAmount: Function;
}

const NumberPicker: React.FC<Props> = (props) => {
  const { number, handleAmount } = props;
  const [amount, setAmount] = useState(number ? number : 1);

  return (
    <div className='numberPicker'>
      <div
        className='next-number-handle'
        style={{ pointerEvents: amount === 1 ? 'none' : 'auto' }}
      >
        -
      </div>
      <div className='number-input'>{amount}</div>
      <div className='next-number-handle'>+</div>
    </div>
  );
};
export default NumberPicker;
