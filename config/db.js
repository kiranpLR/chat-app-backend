const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectFun = async () => {
  try {
    // mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // conn.db("chat-app");
    console.log(`Connection establised`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectFun;
