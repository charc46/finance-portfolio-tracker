import React from 'react'

const Nav = () => {
  return (
    <div className="ui pointing secondary menu">
      <a href="#" className="item active-nav">Dashboard</a>
      <a href="#" className="item">News</a>
      <a href="#" className="item">Holdings</a>
      <div className='right menu'>
        <a href="#" className="item">Account</a>
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
