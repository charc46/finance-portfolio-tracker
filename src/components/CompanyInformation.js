import React from 'react'
import CompanyDetails from './CompanyDetails'

const CompanyInformation = (props) => {
  return (
    <div className='ui segment'>
      <h1>{props.companyName}</h1>
      <div className='company-details'>
        <CompanyDetails symbol={props.symbol} />
      </div>
      <br />
      <div className='financials'>
        <p>Ticker: {props.symbol}</p>
        <p>Price: {props.price}</p>
        <p>Market Cap: {props.marketCap}</p>
        <p>P/E Ratio: {props.pe}</p>
      </div>
    </div>
  )
}

export default CompanyInformation
