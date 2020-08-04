import React, { Suspense } from 'react';
import './style.scss';
import Banner from 'components/Banner';
import Channels from 'components/Channels';
import Deal from 'components/Deal';
import Popular from 'components/Popular';
import Collections from 'components/Collections';
import Mall from 'components/Mall';
const Categories = React.lazy(() => import('components/Categories'));

const Home: React.FC = () => {
  return (
    <div className='HomeContainer'>
      <Banner />
      <Channels />
      <Deal />
      <Popular />
      <Collections />
      <Mall />
      <Suspense fallback={<div>...loading</div>}>
        <Categories />
      </Suspense>
    </div>
  );
};
export default Home;
