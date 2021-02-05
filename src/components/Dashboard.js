import React from 'react'
import PortfolioOverview from './PortfolioOverview'
import TopHoldings from './TopHoldings';
import DashboardNews from './DashboardNews';
import TopSectors from './TopSectors';
import TopMarkets from './TopMarkets';

const Dashboard = () => {
  return (
    <div className='dashboard-content'>
      <PortfolioOverview />
      <TopHoldings />
      <TopSectors />
      <TopMarkets />
      <DashboardNews />
    </div>
  )
}

export default Dashboard
