import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

interface Props {
  image: string;
  link: string;
}

const Banner: React.FC<Props> = (props) => {
  const { image, link } = props;
  return (
    <Link to={link} className='footerFirst__banner-item'>
      <img src={image} alt='' />
    </Link>
  );
};

export default Banner;
