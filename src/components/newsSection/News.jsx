import React from 'react'

function News({news}) {
    return (
        <div className="row pb-4">
            <div className="col-md-5">
                <div className="fh5co_hover_news_img">
                    <div className="fh5co_news_img"><img src={news.image} alt="No image found" /></div>
                    <div></div>
                </div>
            </div>
            <div className="col-md-7 animate-box">
                <a href={news.url} target="_blank" className="fh5co_magna py-2">{news.title}</a> <a href={news.url} target="_blank" className="fh5co_mini_time py-3">:- {news.source.name} - {news.publishedAt} </a>
                <div className="fh5co_consectetur">{news.description}</div>
            </div>
        </div>
    )
}

export default News