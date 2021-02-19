import React from 'react'
import CompanyDetails from './CompanyDetails'

const CompanyInformation = (props) => {
  const symbol = props.symbol

  return (
    <div className='ui segment'>
      <div className='financials'>
        <h2>Financial Information for {props.companyName}</h2>
        <p>Ticker: {props.symbol}</p>
        <p>Price: {props.price}</p>
        <p>Market Cap: {props.marketCap}</p>
        <p>P/E Ratio: {props.pe}</p>
      </div>
    </div>
  )
}

export default CompanyInformation
