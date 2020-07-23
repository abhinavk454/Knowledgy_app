import React, { useEffect,useState } from 'react'
import axios from 'axios'
import "./News.css"

function Page03({topic}) {
    const [news,setNews]=useState([]) 
    useEffect(()=>{
        axios.get(`http://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=498ea298d85448b0b4efb9d95ffb002f`)
        .then((res)=>{
            console.log(res.data.articles)
            setNews(res.data.articles)
        })
        .catch((err)=>{console.error(err)})
    },[topic])// eslint-disable-line
    return (
        <div className="main">
            {news.map((re,index)=>(
                <div className="inner">
                    <article id="art" key={re.source.id}>
                        <img id ="img" src={re.urlToImage} alt=""/>
                        <br />
                        <span id="sp1">Title : {re.title}</span>
                        <br /> 
                        Author : {re.author}
                        <br />
                        Content : {re.content}
                        <br />
                        <a href={re.url} target="_blank">For more</a>
                    </article>
                </div>
                ))}
        </div>
    )
}

export default Page03;
