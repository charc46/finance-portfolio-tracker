import React from 'react'

const Nav = () => {
  return (
    <div className="ui pointing secondary menu">
      <a href="#" className="item active-nav">Dashboard</a>
      <a href="#" className="item">News</a>
      <a href="#" className="item">Holdings</a>
      <div className='right menu'>
        <a href="#" className="item">Account</a>
        <a href="#" className="item">Search Bar</a>
      </div>
    </div>
  )
}

export default Nav
