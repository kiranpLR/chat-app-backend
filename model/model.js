const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  message: String,
  roomID: String,
});

module.exports = mongoose.model("messages", messageSchema);
