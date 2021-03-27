module.exports = (app: any) => {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost:27017/ngxueqiu", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
