import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/index.scss';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import StockPage from './components/StockPage';
import Holdings from './components/Holdings';

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
