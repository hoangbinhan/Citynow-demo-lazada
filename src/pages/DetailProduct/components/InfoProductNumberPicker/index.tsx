import InfoProductNumberPickerItem from 'pages/DetailProduct/atom/InfoProductNumberPickerItem';
import React, { useState } from 'react';

interface Props {
  quantity: number;
  changeNumber: Function;
}

const InfoProductNumberPicker: React.FC<Props> = (props) => {
  const { quantity, changeNumber } = props;

  // const [quantity, setQuantity] = useState(1);

  // function changeNumber(type: string) {
  //   if (type === 'decrease') {
  //     setQuantity(quantity - 1);
  //   } else if (type === 'increase') {
  //     setQuantity(quantity + 1);
  //   }
  //   return;
  // }
  function onChangeNumber(type: string) {
    changeNumber(type);
  }

  return (
    <>
      <div className='numberPicker'>
        <InfoProductNumberPickerItem
          type='decrease'
          content='-'
          changeNumber={onChangeNumber}
          quantity={quantity}
          isDecrease={true}
        />
        <div className='number-input'>{quantity}</div>
        <InfoProductNumberPickerItem
          type='increase'
          content='+'
          changeNumber={onChangeNumber}
          quantity={quantity}
          isDecrease={false}
        />
      </div>
    </>
  );
};

export default InfoProductNumberPicker;
