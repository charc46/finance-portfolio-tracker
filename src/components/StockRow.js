import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/StockRow.scss';

const StockRow = ({ symbol }) => {
  const [stock, setStock] = useState({});

  useEffect(() => {
    const url = `https://sandbox.iexapis.com/stable/stock/${symbol}/quote?`;
    const searchIEX = async () => {
      const { data } = await axios.get(url, {
        params: {
          token: 'Tpk_08b5a20b77b74bce8c14e491f5bc75f1' 
        }
      })
      setStock(data);
    };

    searchIEX();
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
