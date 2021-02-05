import React from 'react'
import StockRow from './StockRow'

const TopHoldings = () => {
  return (
    <div className='ui segment top-holdings'>
      <h1>Top Holdings</h1>
      <StockRow name='Apple' />
      <StockRow name='Alphabet' />
      <StockRow name='Tesla' />
      <StockRow name='AT&T' />
    </div>
  )
}

export default TopHoldings
