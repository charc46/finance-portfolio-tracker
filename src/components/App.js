import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkLoginStatus, fetchHoldings } from '../actions'

import '../styles/index.scss';
import Nav from './Nav';
import Login from './Login';
import Dashboard from './pages/Dashboard/Dashboard';
import StockPage from './pages/Stock/StockPage';
import Holdings from './pages/Holdings/Holdings';

const App = (props) => {
  // Call API on mount to check for logged in user
  useEffect(() => {
    props.checkLoginStatus()
  }, [])

  useEffect(() => {
    if (props.user.loggedInStatus) {
      props.fetchHoldings()
    }
  }, [props.user])

  console.log(props.allHoldings);
  return (
    <div>
      <div className='ui container'>
        <BrowserRouter>
          <Nav user={props.user} loggedIn={props.loggedInStatus} />
          {props.loggedInStatus 
            ?
            <Route path='/' exact component={Dashboard} />
            :
            <Route path='/' exact component={Login} />
          }
          <Route path='/dashboard' exact component={Dashboard} /> 
          <Route path='/holdings' exact component={Holdings} /> 
          {/* <Route path='/holdings' exact render={
            props => (<Holdings {...props} />)} 
          /> */}
          <Route path='/stock/:ticker' component={StockPage} />
        </BrowserRouter>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    user: state.currentUser, 
    loggedInStatus: state.currentUser.loggedInStatus, 
    allHoldings: state.holdingsData.allHoldings 
  }
}

export default connect(mapStateToProps, { checkLoginStatus, fetchHoldings })(App)
