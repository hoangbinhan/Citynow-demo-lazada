import NotFound from 'base/NotFound';
import Products from 'pages/Products';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './base/Footer';
import Navbar from './base/Navbar';
import Cart from './pages/Cart';
import DetailProduct from './pages/DetailProduct';
import Home from './pages/Home';
import store from './store';
import './App.css';

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
