import React from 'react';
import './styles/index.scss';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import StockPage from './components/StockPage';

const App = () => {
  return (
    <div>
      <div className="site-container">
        <Nav />
        <Dashboard />
        {/* <StockPage symbol='AAPL' /> */}
      </div>
    </div>
  )
}

export default App
