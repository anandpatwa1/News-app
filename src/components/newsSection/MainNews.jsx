import React, { useContext } from 'react'
import NewsContext from '../../context/NewsContext'
import News from './News'

function MainNews() {

  const {allNews} = useContext(NewsContext)
 
  if(!allNews){
    return(
      <div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
      <div>
        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">News</div>
      </div>
      <h1 className='text-center mt-5 fs-1'>Loading...</h1>
    </div>
    )
  }
  
  return (
    <div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
      <div>
        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">News</div>
      </div>
      {
        allNews.map(news=><News key={news.id} news={news} />)        
      }
    </div>
  )
}

export default MainNews