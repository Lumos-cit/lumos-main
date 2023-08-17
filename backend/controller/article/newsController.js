const News = require("../../model/NewsModel");

const addNews = async (req, res) => {
  const data = req.body;
  let info = {
    title: data.title,
    content: data.content,
    author_id: data.author_id,
  };

  try {
    const news = await News.create(info);
    res.send(news);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to upload the news");
  }
};

const updateNews = async (req, res) => {
  const data = req.body;
  let info = {
    title: data.title,
    content: data.content,
    author_id: data.author_id,
  };

  try {
    const news = await News.update(info, {
      where: { news_id: req.params.id },
    });
    res.send(news);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to update the news");
  }
};

const getNews = async (req, res) => {
  const match = {};
  const sort = {};

  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const news = await News.findAll({
      where: match,
      offset: offset,
      limit: limit,
      order: [["createdAt", "DESC"]],
    });

    const meta = {
      total: await News.count({
        where: match,
        offset: offset,
        limit: limit,
      }),
      limit: limit,
      offset: offset,
      page: offset / limit + 1,
    };

    const output = {
      data: news,
      meta: meta,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to get the news");
  }
};

const findOneNews = async (req, res) => {
  try {
    const news = await News.findOne({
      where: {
        news_id: Number(req.params.id),
      },
    });
    if (news) res.send(news);
    else res.status(400).json("Not found");
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed get the news");
  }
};

const deleteNews = async (req, res) => {
  News.destroy({
    where: {
      news_id: req.params.id,
    },
  })
    .then(() => {
      console.log("Successfully deleted record.");
      res.send("Deleted Successfully");
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
      res.status(400).json("Failed delete the news");
    });
};

module.exports = {
  addNews,
  updateNews,
  getNews,
  findOneNews,
  deleteNews,
};
