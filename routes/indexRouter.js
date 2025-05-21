const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.userListGet);

indexRouter.get("/new", indexController.userFormGet);
indexRouter.post("/new", indexController.userFormPost);

module.exports = indexRouter;