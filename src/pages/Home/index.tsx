import React, { Suspense } from 'react';
import './style.scss';
import Banner from 'pages/Home/main/Banner';
import Channels from 'pages/Home/main/Channels';
import Deal from 'pages/Home/main/Deal';
import Popular from 'pages/Home/main/Popular';
import Collections from 'pages/Home/main/Collections';
import Mall from 'pages/Home/main/Mall';
import Loading from 'base/Loading';
import ScrollControl from './components/ScrollControl';
const Categories = React.lazy(() => import('pages/Home/main/Categories'));

const Home: React.FC = () => {
  return (
    <div className='HomeContainer'>
      <Banner />
      <Channels />
      <h1>Deal Chớp Nhoáng</h1>
      <Deal />
      <h1>Tìm kiếm phổ biến</h1>
      <Popular />
      <h1>Bộ sưu tập</h1>
      <Collections />
      <h1>LazMall</h1>
      <Mall />
      <h1>Dành riêng cho bạn</h1>
      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>
      <ScrollControl />
    </div>
  );
};
export default Home;
