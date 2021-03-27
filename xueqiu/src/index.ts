import express from "express";

const app: express.Application = express();


app.use(require("cors")());
app.use(express.json());

require("./db/index")(app);
require("./router/index")(app);

app.listen(8000, () => {
  console.log("server is running on 8000");
});
