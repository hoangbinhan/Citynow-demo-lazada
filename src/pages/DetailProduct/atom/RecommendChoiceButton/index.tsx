import { product } from 'constants/types/productsType';
import React from 'react';

interface Props {
  item: product[];
  addItems: Function;
  result: any[];
}

const RecommendChoiceButton: React.FC<Props> = (props) => {
  const { item, addItems, result } = props;

  return (
    <button
      className='RecommendChoice__button'
      onClick={() => {
        addItems(item);
      }}
    >
      Thêm {result.length} sản phẩm vào giỏ hàng
    </button>
  );
};

export default RecommendChoiceButton;
