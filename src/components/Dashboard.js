import React from 'react'
import PortfolioOverview from './PortfolioOverview'
import TopHoldings from './TopHoldings';
import TopSectors from './TopSectors';
import TopMarkets from './TopMarkets';

const Dashboard = ({ user }) => {
  return (
    <div className='dashboard-content'>
      <PortfolioOverview user={user} />
      <TopHoldings user={user} />
      <TopSectors user={user} />
      <TopMarkets user={user} />
      <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
    </div>
  )
}

export default Dashboard
