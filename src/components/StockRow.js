import React from 'react';
import '../styles/StockRow.scss';

const StockRow = ({ name }) => {
  return (
    <div className='stock-row'>
      <div className='stock-col-1'>
        <p className='stock-name'>{name}</p>
        <p>AAPL</p>
      </div>
      <div className='stock-col-2'>
        <p>Price: £2,000</p>
      </div>
      <div className='stock-col-3'>
        <p>Units: 12</p>
        <p>Cost: £3,074</p>
      </div>
      <div className='stock-col-4'>
        <p>Value: £3,874</p>
        <p>+£806</p>
      </div>
      <div className='stock-col-5'>
        <p>+18%</p>
      </div>
    </div>
  )
}

export default StockRow
