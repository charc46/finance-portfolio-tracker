import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import '../styles/index.scss';
import Nav from './Nav';
import Dashboard from './pages/Dashboard/Dashboard';
import StockPage from './pages/Stock/StockPage';
import Holdings from './pages/Holdings/Holdings';

const App = () => {
  return (
    <div>
      <div className='ui container'>
        <BrowserRouter>
          <Nav />
          <Route path='/' exact component={Dashboard} />
          <Route path='/holdings' exact component={Holdings} />
          <Route path='/stock' exact component={StockPage} />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
