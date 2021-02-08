import React, { useState, useEffect } from 'react'
import StockRow from './StockRow'

const TopHoldings = () => {
  const [topHoldings, setTopHoldings] = useState([]);

  useEffect(() => {
    const getTopHoldings = () => {
      // Call rails API for top holdings
      return ['AAPL', 'TSLA', 'GOOG', 'GME'];
    }
    setTopHoldings(getTopHoldings);
    }, [])

  const renderedTopHoldings = topHoldings.map((holding) => {
    return (
      <StockRow key={holding} symbol={holding} />
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
