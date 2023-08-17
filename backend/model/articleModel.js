const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Article = sequelize.define("article", {
  article_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT("long"),
  },
  cover_img: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT("long"),
  },
  tag: {
    type: DataTypes.STRING,
  },
  author_id: {
    type: Sequelize.INTEGER,
  },
});

sequelize
  // .sync({ alter: true })
  .sync()
  .then(() => {
    console.log("Article table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Article;
