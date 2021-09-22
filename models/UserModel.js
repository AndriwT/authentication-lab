const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: String,
  email: String,
  password: String,
});

UserSchema.methods.toJSON = function () {
  const { password, __v, ...user } = this.toObject();
  return user;
};

module.exports = model("User", UserSchema);
