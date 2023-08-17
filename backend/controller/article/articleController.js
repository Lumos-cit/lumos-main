const Article = require("../../model/articleModel");
const multer = require("multer");
const path = require("path");
const { Op } = require("sequelize");

const addArticle = async (req, res) => {
  const data = req.body;
  let info = {
    title: data.title,
    description: data.description,
    cover_img: data.cover_img,
    img: data.img,
    content: data.content,
    tag: data.tag,
    author_id: data.author_id,
  };

  try {
    const article = await Article.create(info);
    res.send(article);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to upload the article");
  }
};

const updateArticle = async (req, res) => {
  const data = req.body;
  let info = {
    title: data.title,
    description: data.description,
    cover_img: data.cover_img,
    img: data.img,
    content: data.content,
    tag: data.tag,
    author_id: data.author_id,
  };

  try {
    const article = await Article.update(info, {
      where: { article_id: req.params.id },
    });
    res.send(article);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to update the product");
  }
};

const getArticles = async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.tag) {
    match.tag = req.query.tag;
  }

  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const article = await Article.findAll({
      where: match,
      offset: offset,
      limit: limit,
      order: [["createdAt", "DESC"]],
    });

    const meta = {
      total: await Article.count({
        where: match,
        offset: offset,
        limit: limit,
      }),
      limit: limit,
      offset: offset,
      page: offset / limit + 1,
    };

    const output = {
      data: article,
      meta: meta,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to get the articles");
  }
};

const findOneArticle = async (req, res) => {
  try {
    const article = await Article.findOne({
      where: {
        article_id: Number(req.params.id),
      },
    });
    if (article) res.send(article);
    else res.status(400).json("Not found");
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed get the article");
  }
};

const deleteArticle = async (req, res) => {
  Article.destroy({
    where: {
      article_id: req.params.id,
    },
  })
    .then(() => {
      res.send("Deleted Sucessfully");
      console.log("Successfully deleted record.");
    })
    .catch((error) => {
      res.status(400).json("Failed to delete");
      console.error("Failed to delete record : ", error);
    });
};

const search = async (req, res) => {
  const match = req.query.s;
  let article = [];
  if (match) {
    try {
      article = await Article.findAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.like]: "%" + match + "%",
              },
            },
          ],
        },
        limit: 10,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json("Error");
    }
  }
  res.send(article);
};

module.exports = {
  addArticle,
  updateArticle,
  getArticles,
  findOneArticle,
  deleteArticle,
  search,
};
