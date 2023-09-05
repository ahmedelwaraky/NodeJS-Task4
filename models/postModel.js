const mongoose = require("mongoose");
//create new schema must require mongoose
const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  userId: {
    // refe between posts and user
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", /// id
    required: true,
  },
});




//create collection at data base (called + USer's)
module.exports = mongoose.model("post", postSchema);