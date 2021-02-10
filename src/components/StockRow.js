import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/StockRow.scss';

const StockRow = ({ id }) => {
  const [stock, setStock] = useState({});

  useEffect(() => {
    const url = `http://localhost:3001/stocks/${id}`;
    const searchAPI = async () => {
      const { data } = await axios.get(url)
      setStock(data);
      // console.log(data);
    };

    searchAPI();
  }, []);

  return (
    <div className='stock-row'>
      <div className='stock-col-1'>
        <p className='stock-name'>{stock.name}</p>
        <p>{stock.ticker}</p>
      </div>
      <div className='stock-col-2'>
        <p>Price: {stock.price}</p>
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
