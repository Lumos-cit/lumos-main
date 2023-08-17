const express = require("express");
const router = express.Router();
const {
  addAuthor,
  findAuthors,
  findOneAuthor,
  DeleteAuthor,
  updateAuthor
} = require("../controller/article/authorController");

router.get("/", (req, res) => {
  findAuthors(req, res);
});

router.get("/:id", (req, res) => {
  findOneAuthor(req, res);
});

router.delete("/:id", (req, res) => {
  DeleteAuthor(req, res);
});

router.put("/:id", (req, res) => {
  updateAuthor(req, res);
});

router.post("/", (req, res) => {
  addAuthor(req, res);
});

module.exports = router;
