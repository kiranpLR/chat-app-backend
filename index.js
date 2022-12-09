const express = require("express");
const connectFun = require("./config/db");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const errorHandle = require("./middleware/errormiddleware");
const port = process.env.PORT;
connectFun();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use("/getMessages", require("./routes/routes"));
app.use("/setMessage", require("./routes/routes"));

io.on("connection", (socket) => {
  console.log(`User connected : ${socket.id}`);
  socket.on("join_room", (data) => {
    socket.join(data);
  });
  socket.on("send_message", (data) => {
    // console.log(data.message);
    socket.to(data.room).emit("receive_message", data);
  });
});
app.use(errorHandle);
server.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT  http://localhost:${port}`);
});
