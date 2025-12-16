const mongoosee = require("mongoose");
const chatModel = mongoosee.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      { type: mongoosee.Schema.Types.ObjectId, ref: "User" },
    ],
    latestMessage: { 
        type: mongoosee.Schema.Types.ObjectId,
        ref: "Message"
        },  
    groupAdmin: { type: mongoosee.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoosee.model("Chat", chatModel);
module.exports = Chat;