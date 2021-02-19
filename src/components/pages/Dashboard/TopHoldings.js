import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StockRow from '../../StockRow'

const TopHoldings = () => {
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = 'http://localhost:3001/api/v1/users/holdings'
    const getHoldings = async () => {
      const { data } = await axios.get(url)
      setHoldings(data.holdings)
      console.log(data);
      setIsLoading(false)
    }

    getHoldings();
  }, [])

  if(isLoading) {
    return <h1>Loading</h1>
  }

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
