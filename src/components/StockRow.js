import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/StockRow.scss';

const StockRow = ({ ticker, units, cost }) => {
  const [stock, setStock] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const iexUrl = `https://sandbox.iexapis.com/stable/stock/${ticker}/quote?`;
    const getStockInfo = async () => {
      const { data } = await axios.get(iexUrl, {
        params: {
          token: 'Tpk_08b5a20b77b74bce8c14e491f5bc75f1'
        }
      })
      setStock(data);
      setIsLoading(false);
    }
    getStockInfo();
  }, []);

  if(isLoading) {
    return <div>Loading</div>
  }

  return (
    <div className='stock-row item'>
      <div className='stock-col-1'>
        <p className='stock-name'>{stock.companyName}</p>
        <p>{stock.symbol}</p>
      </div>
      <div className='stock-col-2'>
        <p>Price: {stock.latestPrice.toFixed(2)}</p>
      </div>
      <div className='stock-col-3'>
        <p>Units: {units}</p>
        <p>Cost: {cost}</p>
      </div>
      <div className='stock-col-4'>
        <p>Value: {(units * stock.latestPrice).toFixed(2)}</p>
        <p>+£806</p>
      </div>
      <div className='stock-col-5'>
        <p>+18%</p>
      </div>
    </div>
  )
}

export default StockRow
