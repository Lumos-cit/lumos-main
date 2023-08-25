const Author = require("../../model/authorModel");

const addAuthor = async (req, res) => {
  const data = req.body;
  let info = {
    name: data.name,
    department: data.department,
    bio: data.bio,
    profile_pic: data.profile_pic,
  };

  try {
    const author = await Author.create(info);
    res.send(author);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed to upload the author");
  }
};

const findAuthors = async (req, res) => {
  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const author = await Author.findAll({
      offset: offset,
      limit: limit,
    });

    const meta = {
      total: await Author.count({
        offset: offset,
        limit: limit,
      }),
      limit: limit,
      offset: offset,
      page: offset / limit + 1,
    };

    const output = {
      data: author,
      meta: meta,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed get the auhtors");
  }
};

const findOneAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: {
        author_id: Number(req.params.id),
      },
    });
    if (author) res.send(author);
    else res.status(400).json("Not found");
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed get the auhtor");
  }
};

const updateAuthor = async (req, res) => {
  const data = req.body;
  let info = {
    name: data.name,
    department: data.department,
    bio: data.bio,
    profile_pic: data.profile_pic,
  };
  try {
    const author = await Author.update(info, {
      where: {
        author_id: Number(req.params.id),
      },
    });
    if (author) res.send(author);
    else res.status(400).json("Not found");
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed get the auhtor");
  }
};

const DeleteAuthor = async (req, res) => {
  try {
    const author = await Author.destroy({
      where: {
        author_id: Number(req.params.id),
      },
    });
    if (author) res.send("Deleted Successfully");
    else res.status(400).json("Not found");
  } catch (error) {
    console.log(error);
    res.status(400).json("Failed get the auhtor");
  }
};

module.exports = {
  findAuthors,
  addAuthor,
  findOneAuthor,
  DeleteAuthor,
  updateAuthor,
};
