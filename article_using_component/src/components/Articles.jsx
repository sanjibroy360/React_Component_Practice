import React from "react";
import { articles } from "../data";

function Articles() {
  
  return articles.map((article) => {
    return (
      <li className="article_card">
        <div className="image_wrapper">
          <img src={article.urlToImage} alt="Card Image" className="img" />
          <p className="article_title">{article.title}</p>
        </div>
      </li>
    );
  });
}

export default Articles;
