require("dotenv/config");
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const Chat = require("./Chat");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MONGODB CONNECTED"))
  .catch(err => {
    throw err;
  });

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("index.html");
});

let online = 0;
io.on("connection", socket => {
  console.log(socket.id);
  online++;
  const getPreviousMessages = async () => {
    previousMessages = await Chat.find();
    socket.emit("bootstrap", previousMessages);
    io.emit("online", online);
  };
  getPreviousMessages();

  socket.on("sendMessage", async data => {
    const msg = new Chat(data);
    msg.save();
    socket.broadcast.emit("newMessage", data);
  });

  socket.on("disconnect", socket => {
    online--;
    io.emit("online", online);
  });
});

const port = process.env.PORT || 4001;

server.listen(port, () => console.log("SERVER LISTENING PORT", port));
