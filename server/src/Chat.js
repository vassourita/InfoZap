const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
