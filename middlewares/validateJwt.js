const jwt = require("jsonwebtoken");

const validateJwt = (req, res, callback) => {
  const token = req.header("Auth");
  if (!token) return res.json("token not found");

  try {
    const { uid } = jwt.verify(
      token,
      "sdjkndsdfnjjndfjwownfjnfjkjknfjnkfsjnksjnkdfs"
    );
    req.uid = uid;
  } catch (error) {
    res.json({ message: "invalid token" });
  }
  callback();
};

module.exports = {
  validateJwt,
};
