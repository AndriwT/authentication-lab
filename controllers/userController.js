const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

const { generateJwt } = require("../middlewares/generateJwt");

const signup = async (req, res) => {
  const emailAlreadyExists = await User.findOne({ email: req.body.email });
  if (emailAlreadyExists) return res.json({ message: "email exists already" });

  const createdUser = await new User(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    createdUser.password = bcrypt.hashSync(req.body.password, salt);
    createdUser.save();

    return res.json(createdUser);
  } catch (error) {
    return res.json({ message: "error creating user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (!userExists) return res.json({ message: "no user" });

  const validatePassword = bcrypt.compareSync(password, userExists.password);
  if (!validatePassword) return res.json({ message: "password dont match" });
  const token = await generateJwt(userExists._id);
  return res.json({ user: userExists, token: token });
};

module.exports = {
  signup,
  login,
};
