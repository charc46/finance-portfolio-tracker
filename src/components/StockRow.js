import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/StockRow.scss';

const StockRow = ({ ticker, units }) => {
  const [stock, setStock] = useState({});

  useEffect(() => {
    const iexUrl = `https://sandbox.iexapis.com/stable/stock/${ticker}/quote?`;
    const getStockInfo = async () => {
      const { data } = await axios.get(iexUrl, {
        params: {
          token: 'Tpk_08b5a20b77b74bce8c14e491f5bc75f1'
        }
      })
      setStock(data);
    }
    getStockInfo();
  }, []);

  return (
    <div className='stock-row'>
      <div className='stock-col-1'>
        <p className='stock-name'>{stock.companyName}</p>
        <p>{stock.symbol}</p>
      </div>
      <div className='stock-col-2'>
        <p>Price: {stock.latestPrice}</p>
      </div>
      <div className='stock-col-3'>
        <p>Units: {units}</p>
        <p>Cost: £3,074</p>
      </div>
      <div className='stock-col-4'>
        <p>Value: {units * stock.latestPrice}</p>
        <p>+£806</p>
      </div>
      <div className='stock-col-5'>
        <p>+18%</p>
      </div>
    </div>
  )
}

export default StockRow
