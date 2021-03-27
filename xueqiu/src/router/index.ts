import * as express from "express";
import axios from "axios";
module.exports = (app: any) => {
  const router = express.Router({
    mergeParams: true,
  });

  const nameDisposeMiddleWare = require("../middleware/nameDispose");

  router
    
    .get("/", async (req: any, res) => {
      const queryOptions: object = {};
      const items = await req.Model.find().setOptions(queryOptions).limit(10);
      res.send(items);
    })
    
    .get("/:id", async (req: any, res) => {
      const model = await req.Model.findById(req.params.id);
      res.send(model);
    })

    .post("/", async (req: any, res) => {
      let httpUrl: string = `https://afdian.net/api/creator/list?page=1&type=rec&category_id=&q=`;
      let { data: datas } = await axios.get(httpUrl, {});
      let lists = datas.data.list
      const model = await req.Model.create(lists);
      res.send(model);
    })
    .put("/:id", async (req: any, res) => {
      const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
      res.send(model);
    })
    .delete("/:id", async (req: any, res) => {
      const model = await req.Model.findByIdAndDelete(req.params.id, req.body);
      res.send(model);
    });

  app.use("/admin/api/rest/:resource", nameDisposeMiddleWare(), router);
};
