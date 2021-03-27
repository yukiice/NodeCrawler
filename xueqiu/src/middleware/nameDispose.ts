module.exports = (options: any) => {
  return async (req: any, res: any, next: any) => {
    const modelName: string = require("inflection").classify(
      req.params.resource
    );
    req.Model = require(`../models/${modelName}`);
    next();
  };
};
