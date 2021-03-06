import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import NotFound from 'components/NotFound';
import Products from 'pages/Products';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products/:id' component={DetailProduct} />
            <Route path='/cart' component={Cart} />
            <Route path='/products' component={Products} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
