import React from 'react'

const NewsSnippet = (props) => {
  const truncSummary = (str) => {
    if(str.length > 50) { 
      const length = 50
      const truncStr = str.substring(0, length)
      return `${truncStr}...`;
    }
    return `${str}...`
  }
  return (
    <div className='news-snippet'>
      <h4>{props.headline}</h4>
      <p>{truncSummary(props.content)}</p>
      <div className='company-news-snippet'>
        <p>Company: {props.company}</p>
        <p>Price: 500</p>
      </div>
    </div>
  )
}

export default NewsSnippet
