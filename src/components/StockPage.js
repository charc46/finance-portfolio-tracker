import React, { useState, useEffect} from 'react'
import axios from 'axios'
import CompanyInformation from './CompanyInformation'
import StockNews from './StockNews'

const StockPage = ({symbol}) => {
  const [stock, setStock] = useState({});

  useEffect(() => {
    const url = `https://sandbox.iexapis.com/stable/stock/${symbol}/quote?`;
    const getStock = async () => {
      const { data } = await axios.get(url, {
        params: {
          token: 'Tpk_08b5a20b77b74bce8c14e491f5bc75f1'
        }
      })
    setStock(data);
    }
    getStock();
  }, [])

  return (
    <div>
      <CompanyInformation 
        companyName={stock.companyName}
        symbol={stock.symbol}
        price={stock.latestPrice}
        marketCap={stock.marketCap}
        pe={stock.peRatio}
      />
      <StockNews />
    </div>
  )
}

export default StockPage
