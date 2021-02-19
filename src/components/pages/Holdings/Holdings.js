import React, { useEffect } from 'react'
import { fetchHoldings } from '../../../actions'
import { connect } from 'react-redux'
import StockRow from '../../StockRow'

const Holdings = (props) => {
  useEffect(() => {
    props.fetchHoldings()
  }, [])

  const renderList = () => {
    return props.holdings.map((holding) => {
      return (
        <StockRow key={holding.id} ticker={holding.ticker} units={holding.units} />
      )
    })
  }
  return (
    <div className='ui relaxed divided list'>
      <h1>Your Holdings</h1>
      {renderList()}
    </div>
  )
}

const mapStateToProps = state => {
  return { holdings: state.holdings }
}

export default connect(mapStateToProps, { fetchHoldings })(Holdings)
