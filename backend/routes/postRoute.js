const express = require("express");
const router = express.Router();
const {
  addArticle,
  deleteArticle,
  findOneArticle,
  getArticles,
  search,
  updateArticle,
} = require("../controller/article/articleController");

router.get("/articles", getArticles);

router.get("/article/:id", findOneArticle);

router.get("/article/search", search);

router.post("/article", addArticle);

router.put("/article/:id", updateArticle);

router.delete("/article/:id", deleteArticle);

//
const {
  addNews,
  deleteNews,
  findOneNews,
  getNews,
  updateNews,
} = require("../controller/article/newsController");

router.get("/news", getNews);

router.get("/news/:id", findOneNews);

router.post("/news", addNews);

router.put("/news/:id", updateNews);

router.delete("/news/:id", deleteNews);

module.exports = router;
