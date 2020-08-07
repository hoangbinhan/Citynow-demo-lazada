import React from 'react';

interface Props {
  item: any;
  deleteItem: Function;
}

const RecommendChoiceItem: React.FC<Props> = (props) => {
  const { item, deleteItem } = props;
  return (
    <div className='RecommendChoice__list-item'>
      <div className='RecommendChoice__list-item-title'>{item.name}</div>
      <div className='RecommendChoice__list-item-price'>{item.price}</div>
      <i className='fas fa-trash' onClick={() => deleteItem(item)}></i>
    </div>
  );
};

export default RecommendChoiceItem;
