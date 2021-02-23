import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  // Want it to run JUST ONCE, after the component is mounted
  // for this, we need an empty dependency array
  useEffect(() => {
    console.log("Component is born");

    const getArticles = async () => {
      // console.log("Doing the fetch");
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      // console.log(response);
      // console.log("Articles fetched");
      setArticles(response.data);
    };

    getArticles();
  }, []);

  console.log("WHAT IS ARTICLES?", articles);

  // our goal => fetch an array of articles and display them.
  // fetch some data => axios.
  // Something to trigger this request => useEffect
  //    => trigger after the component is mounted
  // Some state to store this data.

  if (articles.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {articles.map(art => (
        <ArticleCard title={art.title} body={art.body} />
      ))}
    </div>
  );
};

export default ArticleList;
