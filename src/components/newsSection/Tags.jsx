import React, { useContext } from 'react'
import { getNews } from '../../context/NewsAction'
import NewsContext from '../../context/NewsContext'

function Tags() {

  const {dispatch} = useContext(NewsContext)
  
  const handleClick = async (topic)=>{
    const data = await getNews(topic)
    dispatch({
      type : "GET_DATA",
      payload : data
    })
  }

  
  return (
    <>
      <div>
        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Tags</div>
      </div>
      <div className="clearfix"></div>
      <div className="fh5co_tags_all">
        <a onClick={()=>handleClick("Business")} className="fh5co_tagg">Business</a>
        <a onClick={()=>handleClick("Technology")} className="fh5co_tagg">Technology</a>
        <a onClick={()=>handleClick("Sport")} className="fh5co_tagg">Sport</a>
        <a onClick={()=>handleClick("Art")} className="fh5co_tagg">Art</a>
        <a onClick={()=>handleClick("Lifestyle")} className="fh5co_tagg">Lifestyle</a>
        <a onClick={()=>handleClick("Three")} className="fh5co_tagg">Three</a>
        <a onClick={()=>handleClick("Photography")} className="fh5co_tagg">Photography</a>
        <a onClick={()=>handleClick("Lifestyle")} className="fh5co_tagg">Lifestyle</a>
        <a onClick={()=>handleClick("Art")} className="fh5co_tagg">Art</a>
        <a onClick={()=>handleClick("Education")} className="fh5co_tagg">Education</a>
        <a onClick={()=>handleClick("Social")} className="fh5co_tagg">Social</a>
        <a onClick={()=>handleClick("Three")} className="fh5co_tagg">Three</a>
      </div>
    </>
  )
}

export default Tags