import React from "react";
import {articles} from "../data.js";
import Articles from "./Articles.jsx";

function Article() {
  return (
    <section className="article-sec">
      <div className="container">
        <h1 className="article_heading">Articles</h1>
        <ul className="article_card_wrapper">
          <Articles />
        </ul>
      </div>
    </section>
  );
}

export default Article;
