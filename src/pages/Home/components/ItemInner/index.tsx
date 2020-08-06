import ItemInnerImage from 'pages/Home/atom/ItemInnerImage';
import React from 'react';
import ItemInnerText from '../ItemInnerText';
import { Link } from 'react-router-dom';

interface Props {
  image: string;
  title: string;
  price: string;
  currentPrice: string;
  id: string;
}

const ItemInner: React.FC<Props> = (props) => {
  const { image, title, price, currentPrice, id } = props;

  return (
    <Link to={`/products/${id}`} id='item__contextMenu'>
      <ItemInnerImage image={image} />
      <ItemInnerText title={title} price={price} currentPrice={currentPrice} />
    </Link>
  );
};

export default ItemInner;
