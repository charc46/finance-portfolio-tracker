import React from 'react'
import NewsSnippet from './NewsSnippet'

const DashboardNews = () => {
  return (
    <div className='ui segment dashboard-news'>
      <h1 style={{marginTop: '0'}}>News</h1>
      <NewsSnippet />
      <NewsSnippet />
      <NewsSnippet />
      <NewsSnippet />
      <NewsSnippet />
    </div>
  )
}

export default DashboardNews
