import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkLoginStatus } from '../actions'

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
    console.log(props);
  }, [])

  const user = props.user

  return (
    <div>
      <div className='ui container'>
        <BrowserRouter>
          <Nav user={user} loggedIn={props.loggedInStatus} />
          <Switch>
            {props.loggedInStatus 
              ?
              <Route path='/' exact component={Dashboard} />
              :
              <Route path='/' exact component={Login} />
            }
            <Route path='/dashboard' exact component={Dashboard} /> 
            <Route path='/holdings' exact component={Holdings} />
            <Route path='/stock' exact component={StockPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: state.currentUser, loggedInStatus: state.currentUser.loggedInStatus }
}

export default connect(mapStateToProps, { checkLoginStatus })(App)
