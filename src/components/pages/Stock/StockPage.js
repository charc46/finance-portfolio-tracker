import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStockHoldings, fetchIexStockData } from '../../../actions'

import CompanyInformation from './CompanyInformation'
import CompanyDetails from './CompanyDetails'
import UpdateHoldings from '../Holdings/UpdateHoldings'
import StockNews from './StockNews'

const StockPage = (props) => {
  useEffect(() => {
    // Call API for user holdings on idividual stock 
    props.fetchStockHoldings(props.ticker)
    // Fetch info for symbol prop stock from IEX
    props.fetchIexStockData(props.ticker)
  }, []);

  // Filter holdings which match the ticker symbol passed in as props to the StockPage component
  // const stockHoldings = holdings.filter(holding => holding.ticker === symbol);
  
  // Return the id of the stock to then retrieve user holdings for the stock and pass it to the 
  // UpdateHoldings component as a prop
  // const stockId = stockHoldings[0].stock_id;
  const stock = props.stockData
  
  return (
    <div>
      <h1>{props.ticker}</h1>
      <h1>{stock.companyName}</h1>
      <CompanyDetails symbol={stock.symbol} />
      <CompanyInformation 
        companyName={stock.companyName}
        symbol={stock.symbol}
        price={stock.latestPrice}
        marketCap={stock.marketCap}
        pe={stock.peRatio}
      />
      <UpdateHoldings stock={stock} holdings={props.holdings} ticker={props.ticker} />
      {/* <StockNews /> */}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { 
    holdings: state.holdingsData.stockHoldings.stockHoldings, 
    stockData: state.holdingsData.iexData, 
    ticker: ownProps.match.params.ticker 
  }
}

export default connect(mapStateToProps, { fetchStockHoldings, fetchIexStockData })(StockPage)
