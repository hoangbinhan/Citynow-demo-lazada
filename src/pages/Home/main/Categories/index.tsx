import { fetchProducts } from 'actions/products';
import { product } from 'constants/types/productsType';
import ButtonLoadMore from 'pages/Home/components/ButtonLoadMore';
import Item from 'pages/Home/components/Item';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'reducers';
import './style.scss';

const visible = 18;

const Categories: React.FC = () => {
  const [perPage, setPerPage] = useState(18);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchProducts();
    dispatch(action);

    return () => {};
  }, [dispatch]);

  const products = useSelector((state: AppState) => state.products.product);

  let results = products
    .slice(0, perPage)
    .map(function (product: product, index: number) {
      return (
        <Item
          key={index}
          image={product.imageUrl}
          title={product.name}
          price={product.price}
          currentPrice={product.oldPrice}
          id={product.id}
        ></Item>
      );
    });

  const LoadMore = () => {
    setPerPage(perPage + visible);
  };

  return (
    <div className='categories' id='ScrollControl-Categories'>
      {results}
      {perPage < products.length && <ButtonLoadMore onLoadMore={LoadMore} />}
    </div>
  );
};

export default Categories;
