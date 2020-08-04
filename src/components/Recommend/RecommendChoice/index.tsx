import { addToCart } from 'actions/cart';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { product } from 'constants/types/productsType';

interface Props {
  item: product[];
  deleteItem: Function;
}

const RecommendChoice: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { item, deleteItem } = props;

  const addItems = (item: product[]) => {
    try {
      for (let i = 0; i < item.length; i++) {
        const action = addToCart(item[i].id, 1);
        dispatch(action);
      }
    } catch (err) {
      console.log('err :>> ', err);
    }
  };

  useEffect(() => {
    return () => {};
  }, [item]);
  const result = item.map((item, index) => {
    return (
      <div key={index} className='RecommendChoice__list-item'>
        <div className='RecommendChoice__list-item-title'>{item.name}</div>
        <div className='RecommendChoice__list-item-price'>{item.price}</div>
        <i className='fas fa-trash' onClick={() => deleteItem(item)}></i>
      </div>
    );
  });
  return (
    <div className='RecommendChoice'>
      <ul className='RecommendChoice__list'>{result}</ul>
      <button
        className='RecommendChoice__button'
        onClick={() => {
          addItems(item);
        }}
      >
        Thêm {result.length} sản phẩm vào giỏ hàng
      </button>
    </div>
  );
};

export default RecommendChoice;
