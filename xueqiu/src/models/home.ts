const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  creator:{
    category:{
        name:String,
        pic:String
    },
    detail: String,
    doing: String,
    monthly_fans: Number,
  },
  avatar: String,
  cover: String,
});
module.exports = mongoose.model("Home", schema);
