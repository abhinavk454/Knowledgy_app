import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";
//inequality
function Page05() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=Inequality&sortBy=popularity&apiKey=498ea298d85448b0b4efb9d95ffb002f`
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // eslint-disable-line
  return (
    <div className="main">
      {news.map((re, index) => (
        <div className="inner">
          <article id="art" key={re.source.id}>
            <img id="img" src={re.urlToImage} alt="" />
            <br />
            <span id="sp1">Title : {re.title}</span>
            <br />
            Author : {re.author}
            <br />
            Content : {re.content}
            <br />
            <a href={re.url} target="_blank">
              For more
            </a>
            <br />
            <span>By </span>: {re.source.name}
            <br />
            <span>Date </span>: {re.publishedAt}
          </article>
        </div>
      ))}
    </div>
  );
}

export default Page05;
