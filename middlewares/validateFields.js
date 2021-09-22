const { validationResult } = require("express-validator");

const validateFields = (req, res, callback) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  callback();
};

module.exports = { validateFields };
