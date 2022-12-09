const asyncHandler = require("express-async-handler");
const Messages = require("../model/model");

const getMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Messages.find({});
    res.status(200).send(messages);
  } catch (error) {
    console.log("Error with get:", error);
  }
});

const setMessage = asyncHandler(async (req, res) => {
  //   console.log(req.body, "body====");
  if (!req.body) {
    res.status(400);
    throw new Error("Please enter body");
  }
  const message = await Messages.create(req.body);
  res.status(200).send(message);
});

module.exports = {
  getMessages,
  setMessage,
};
