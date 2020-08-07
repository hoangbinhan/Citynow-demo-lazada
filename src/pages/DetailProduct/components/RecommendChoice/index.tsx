import { addToCart } from 'actions/cart';
import { product } from 'constants/types/productsType';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import RecommendChoiceItem from 'pages/DetailProduct/atom/RecommendChoiceItem';
import RecommendChoiceButton from 'pages/DetailProduct/atom/RecommendChoiceButton';

interface Props {
  item: product[];
  deleteItem: Function;
  handleRemoveList: Function;
}

const RecommendChoice: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { item, deleteItem, handleRemoveList } = props;

  const addItems = (item: product[]) => {
    try {
      for (let i = 0; i < item.length; i++) {
        const action = addToCart(item[i].id, 1);
        dispatch(action);
      }
      handleRemoveList();
    } catch (err) {
      console.log('err :>> ', err);
    }
  };

  useEffect(() => {
    return () => {};
  }, [item]);

  const result = item.map((item, index) => {
    return (
      <RecommendChoiceItem key={index} item={item} deleteItem={deleteItem} />
    );
  });

  return (
    <div className='RecommendChoice'>
      <ul className='RecommendChoice__list'>{result}</ul>
      <RecommendChoiceButton item={item} addItems={addItems} result={result} />
    </div>
  );
};

export default RecommendChoice;
