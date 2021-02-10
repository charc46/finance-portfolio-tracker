import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StockRow from './StockRow'

const TopHoldings = () => {
  const [topHoldings, setTopHoldings] = useState([]);

  useEffect(() => {
    const getTopHoldings = () => {
      // Call rails API for top holdings
      const url = 'http://localhost:3001/stocks'
      const getStocks = async () => {
        const { data } = await axios.get(url)
        setTopHoldings(data.slice(0, 5))
      }
      getStocks();
    }
    getTopHoldings()
    }, [])

  const renderedTopHoldings = topHoldings.map((holding) => {
    return (
      <StockRow key={holding.ticker} id={holding.id} />
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
