import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsSnippet from './NewsSnippet';

const DashboardNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url = `https://sandbox.iexapis.com/stable/stock/AAPL/news?`;
    const getNews = async () => {
    const { data } = await axios.get(url, {
      params: {
        token: 'Tpk_08b5a20b77b74bce8c14e491f5bc75f1',
        last: 5
      }
    })
    setNews(data);
  }
  getNews();
}, []);

  const renderedNews = news.map((article) => {
    return (
      <div>
        <NewsSnippet 
          key={article.headline} 
          headline={article.headline} 
          content={article.summary} 
          company={article.related} 
        />
      </div>
    )
  })

  return (
    <div className='ui segment dashboard-news'>
      <h1 style={{marginTop: '0'}}>News</h1>
      {renderedNews}
    </div>
  )
}

export default DashboardNews
