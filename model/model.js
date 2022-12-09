const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  author: String,
  message: String,
  room: String,
  time: String,
});

module.exports = mongoose.model("messages", messageSchema);
