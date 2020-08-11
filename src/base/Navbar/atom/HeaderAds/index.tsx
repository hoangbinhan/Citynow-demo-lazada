import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const HeaderAds: React.FC = (props) => {
  return (
    <Link to='/' className='headerBody__ads'>
      <img
        src='//laz-img-cdn.alicdn.com/images/ims-web/TB1zT1QbMgP7K4jSZFqXXamhVXa.png'
        className='headerBody__ads-img'
        alt=''
      />
    </Link>
  );
};

export default HeaderAds;
