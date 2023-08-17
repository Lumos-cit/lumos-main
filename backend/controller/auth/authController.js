const User = require("../../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignIn = async (req, res, data) => {
  User.findOne({
    where: {
      email: data.email,
    },
  }).then(async (user) => {
    if (!user) {
      // create new user
      try {
        const { username, email, password, isEmailVerified, isAdmin } =
          req.body;
        const newUser = await User.create({
          username,
          email,
          password,
          isEmailVerified,
          isAdmin,
        });
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).json({ message: "Failed to create a new user." });
      }
    } else {
      // user already present
      res.status(400).json("Email already in use");
    }
  });
};

const userLogIn = async (req, res, data) => {
  User.findOne({
    where: {
      email: data.email,
    },
  }).then(async (user) => {
    if (user) {
      // user found
      const passwordMatch = data.password == user.dataValues.password;

      if (!passwordMatch) {
        return res.status(400).json({
          errors: "Invalid Credentials",
        });
      } else {
        const { password, createdAt, updatedAt, ...data } = user.dataValues;
        res.send(data);
      }
    } else {
      // user not found
      res.status(400).json("User not found");
    }
  });
};

const findOneUser = (req, res, id) => {
  User.findOne({
    where: {
      id: id,
    },
  })
    .then((user) => {
      // console.log(user);
      res.send(user);
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
      res.json("User not found");
    });
};

const updateUser = (req, res, data) => {
  User.update(
    {
      phone: data.phone,
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      country: data.country,
      pincode: data.pincode,
      state: data.state,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((user) => {
      console.log(user);
      res.send("updated successfully");
    })
    .catch((error) => {
      console.error("Failed to update record : ", error);
      res.json("Failed to update").status(400);
    });
};

module.exports = { userSignIn, userLogIn, findOneUser, updateUser };
