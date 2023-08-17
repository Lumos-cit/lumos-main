const express = require("express");
const router = express.Router();
const { userValidationRules, validate } = require("../middleware/validation");
const {
  userSignIn,
  userLogIn,
  findOneUser,
  updateUser,
} = require("../controller/auth/authController");

router.post("/signin", userValidationRules(), validate, (req, res) => {
  userSignIn(req, res, req.body);
});

router.post("/login", userValidationRules(), validate, (req, res) => {
  userLogIn(req, res, req.body);
});

router.get("/user/:id", (req, res) => {
  findOneUser(req, res, req.params.id);
});

router.put("/user/:id", (req, res) => {
  updateUser(req, res, req.body);
});

module.exports = router;
