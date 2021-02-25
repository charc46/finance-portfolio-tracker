import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions'

const Nav = (props) => {
  const handleSignOut = () => {
    props.signOut()
  }

  return (
    <div className="ui pointing secondary menu">
      <Link to='/dashboard' className='item'>Dashboard</Link>
      <Link to='/holdings' className='item'>Holdings</Link>
      <div className='right menu'>
        {props.user.user && <h3>{props.user.user.username}</h3> }
        <Link to='/' className='item'>Account</Link>
        {props.loggedIn ?
          <button className='ui button' onClick={handleSignOut}>Sign Out</button>
        :
          <Link to='/' className='ui button'>Sign In</Link>
        }
        <div className="ui input nav-search">
          <form className='ui form'>
            <input type="text" placeholder='Search..' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { signOut })(Nav)
