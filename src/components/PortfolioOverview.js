import React from 'react'
import Chart from './Chart'

const PortfolioOverview = () => {
  return (
    <div className="ui segment portfolio-overview">
      <div>
        <h1 className='header'>Portfolio Overview</h1>
        <div className='portfolio-pnl'>
          <h3>£18,567.88 <small>+32%</small></h3>
          <p>+£3,766</p>
        </div>
      </div>
      <div className='dashboard-chart'>
        <Chart />
      </div>
    </div>
  )
}

export default PortfolioOverview
