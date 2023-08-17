import React, { useEffect, useState, useRef } from "react";
import ArticlePage from "../components/ArticlePage";
import { useParams } from "react-router-dom";
import axios from "axios";

function Article() {
  const { articleId } = useParams();
  const [article, setArticle] = useState();
  const [author, setAuthor] = useState();
  const [relatedArticles, setRelatedArticles] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    // if (!isMounted.current) {
    //   isMounted.current = true;
    fetchArticle();
    return () => setRelatedArticles((prevArticles) => []);
    // }
  }, [articleId]);

  function fetchArticle() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/article/" + articleId)
      .then((res) => {
        console.log(res.data);
        setArticle(res.data);
        return res;
      })
      .then((res) => {
        fetchAuthor(res.data.author_id);
        fetchRelatedArticles();
      });

    // .then((res) => fetchRelatedArticles(res.data.tags));
  }

  function fetchAuthor(authorId) {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/author/" + authorId)
      .then((res) => {
        // console.log(res.data);
        setAuthor(res.data);
      });
  }

  async function fetchRelatedArticles() {
    const randomArr = getRandomNumbers();
    console.log({ randomArr });
    const articleData = randomArr.map(async (rnum) => {
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + `/api/article/${rnum}`
      );
      return res.data;
    });
    const resolvedArticleData = await Promise.all(articleData);
    setRelatedArticles([...resolvedArticleData]);
    // const randArr = getRandomNumbers()
    // console.log("relatedArticle");
    // const res = await axios.get(
    //   import.meta.env.VITE_BACKEND_URL + `/api/articles?tag=${tag}`
    // );
    // // console.log(res.data.data);
    // const randArr = getRandomNumbers(res.data.data);
    // console.log(randArr);
    // randArr.forEach((randId) => {
    //   const foundArticle = res.data.data.find(
    //     (article) => article.article_id === randId
    //   );
    //   setRelatedArticles((prevArticles) => [...prevArticles, foundArticle]);
    // });
  }

  const getRandomNumbers = () => {
    let tempSet = new Set();
    while (tempSet.size < 3) {
      //8 should be changed to 48;
      let value = Math.floor(Math.random() * 8 + 1);
      tempSet.add(value);
    }
    return [...tempSet];
  };

  return (
    <div>
      <ArticlePage
        data={article}
        relatedArticles={relatedArticles}
        author={author}
      />
    </div>
  );
}

export default Article;
