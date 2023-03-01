import React, { useContext, useState } from 'react'
import { getNews } from '../context/NewsAction'
import NewsContext from '../context/NewsContext'

function Search() {

  const [text, setText] = useState("")

  const {dispatch} = useContext(NewsContext)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await getNews(text)
    dispatch({
      type : "GET_DATA",
      payload : data
    })
    setText("")
  }

  return (
    <form className="d-flex scarch-bar" role="search" onSubmit={(e) => handleSubmit(e)}>
      <input value={text} onChange={(e)=>setText(e.target.value)} className="form-control me-2 rounded-0" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-warning rounded-0" type="submit">Search</button>
    </form>
  )
}

export default Search

