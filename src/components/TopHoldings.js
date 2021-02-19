import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StockRow from './StockRow'

const TopHoldings = ({ user, holdings }) => {
  const topHoldings = holdings.slice(0, 3);
  const renderedTopHoldings = topHoldings.map((holding) => {
    return (
      <StockRow key={holding.ticker} ticker={holding.ticker} units={holding.units} />
    )
  })

  return (
    <div className='ui segment top-holdings'>
      <h1>Top Holdings</h1>
      {renderedTopHoldings}
    </div>
  )
}

export default TopHoldings
