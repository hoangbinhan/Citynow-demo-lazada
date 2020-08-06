import React, { Suspense } from 'react';
import './style.scss';
import Banner from 'pages/Home/main/Banner';
import Channels from 'pages/Home/main/Channels';
import Deal from 'pages/Home/main/Deal';
import Popular from 'pages/Home/main/Popular';
import Collections from 'pages/Home/main/Collections';
import Mall from 'pages/Home/main/Mall';
import Loading from 'base/Loading';
const Categories = React.lazy(() => import('pages/Home/main/Categories'));

const Home: React.FC = () => {
  return (
    <div className='HomeContainer'>
      <Banner />
      <Channels />
      <Deal />
      <Popular />
      <Collections />
      <Mall />
      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>
    </div>
  );
};
export default Home;
