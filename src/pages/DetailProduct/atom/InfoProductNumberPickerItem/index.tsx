import React from 'react';

interface Props {
  type: string;
  content: string;
  changeNumber: Function;
  quantity: number;
  isDecrease: boolean;
}

const InfoProductNumberPickerItem: React.FC<Props> = (props) => {
  const { type, content, changeNumber, quantity, isDecrease } = props;
  return (
    <div
      className='next-number-handle'
      style={{
        pointerEvents: quantity === 1 && isDecrease === true ? 'none' : 'auto',
      }}
      onClick={() => changeNumber(type)}
    >
      {content}
    </div>
  );
};

export default InfoProductNumberPickerItem;
