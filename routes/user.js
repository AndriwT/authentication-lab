const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/userController");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");

// const middlewares = [
//   check("name", "need name").not().isEmpty(),
//   validateFields,
// ];

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
