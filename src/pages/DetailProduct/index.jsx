import axios from 'axios';
import Info from 'pages/DetailProduct/main/Info';
import React, { useEffect, useState } from 'react';
import './style.scss';

export default function DetailProduct(props) {
  const [product, setProduct] = useState({});
  let id = props.match.params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get('http://localhost:8080/products').then((res) => {
      let products = res.data;
      let result = products.find((item) => item.id === id);
      setProduct(result);
    });
    return () => {};
  }, [id]);

  return (
    <div className='info-product grid'>
      <Info product={product} />
    </div>
  );
}
