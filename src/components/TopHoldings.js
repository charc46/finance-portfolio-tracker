import React from 'react'
import StockRow from './StockRow'

const TopHoldings = () => {
  return (
    <div className='ui segment top-holdings'>
      <h1>Top Holdings</h1>
      <StockRow symbol='AAPL' />
      <StockRow symbol='GOOG' />
      <StockRow symbol='TSLA' />
      <StockRow symbol='AAPL' />
    </div>
  )
}

export default TopHoldings
