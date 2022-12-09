const express = require("express");
const router = express.Router();

const { getMessages, setMessage } = require("../controllers/messageController");

router.get("/", getMessages);
router.post("/", setMessage);

module.exports = router;
