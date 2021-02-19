import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="ui pointing secondary menu">
      <Link to='/' className='item'>Dashboard</Link>
      <Link to='/holdings' className='item'>Holdings</Link>
      <div className='right menu'>
        <Link to='/' className='item'>Account</Link> 
        <div className="ui input nav-search">
          <form className='ui form'>
            <input type="text" placeholder='Search..' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Nav
