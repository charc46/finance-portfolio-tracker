import React from 'react';
import './styles/index.scss';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
      <div className="site-container">
        <Nav />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
