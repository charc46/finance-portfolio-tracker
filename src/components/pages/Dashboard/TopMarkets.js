import React from 'react'

const TopMarkets = () => {
  return (
    <div className='top-markets ui segment'>
      <h1>Top Markets</h1>
      <div className='market'>
        <p>North America</p>
        <p>38%</p>
      </div>
      <div className='market'>
        <p>Europe</p>
        <p>25%</p>
      </div>
      <div className='market'>
        <p>Asia</p>
        <p>20%</p>
      </div>
      <div className='market'>
        <p>Emerging</p>
        <p>10%</p>
      </div>
    </div>
  )
}

export default TopMarkets