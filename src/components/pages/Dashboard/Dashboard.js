import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PortfolioOverview from './PortfolioOverview'
import { checkLoginStatus } from '../../../actions';

const Dashboard = (props) => {
  useEffect(() => {
    props.checkLoginStatus()
  }, [])

  return (
    <div className='dashboard-content'>
      <PortfolioOverview />
      {/* <TopHoldings />
      <TopSectors />
      <TopMarkets /> */}
      <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
    </div>
  )
}

const mapStateToProps = state => {
  return { user: state.user, loggedInStatus: state.logged_in}
}

export default connect(mapStateToProps, { checkLoginStatus })(Dashboard)
