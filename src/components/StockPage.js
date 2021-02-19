import React, { useState, useEffect} from 'react'
import axios from 'axios'
import CompanyInformation from './CompanyInformation'
import CompanyDetails from './CompanyDetails'
import UpdateHoldings from './UpdateHoldings'
import StockNews from './StockNews'

const StockPage = ({symbol}) => {
  const [stock, setStock] = useState({});
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch info for symbol prop stock from IEX
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

  }, []);

  useEffect(() => {
    const getHoldings = () => {
      // Call rails API for all user holdings
      const url = `http://localhost:3001/api/v1/users/holdings`
      const fetchHoldings = async () => {
        const { data } = await axios.get(url)
        setHoldings(data.holdings);
      }
      fetchHoldings();
      setIsLoading(false);
    }
    getHoldings();
  }, [])
  // Filter holdings which match the ticker symbol passed in as props to the StockPage component
  const stockHoldings = holdings.filter(holding => holding.ticker === symbol);
  
  // Return the id of the stock to then retrieve user holdings for the stock and pass it to the 
  // UpdateHoldings component as a prop
  const stockId = stockHoldings[0].stock_id;

  return (
    <div>
      <h1>{stock.companyName}</h1>
      <CompanyDetails symbol={symbol} />
      <CompanyInformation 
        companyName={stock.companyName}
        symbol={stock.symbol}
        price={stock.latestPrice}
        marketCap={stock.marketCap}
        pe={stock.peRatio}
      />
      <UpdateHoldings stock={stock} holdings={stockHoldings} stockId={stockId} />
      <StockNews />
    </div>
  )
}

export default StockPage
