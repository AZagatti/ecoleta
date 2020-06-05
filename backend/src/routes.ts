import express from "express";
import multer from "multer";

import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

import pointsValidator from "./validators/PointsValidator";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.get("/points/", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post(
  "/points",
  upload.single("image"),
  pointsValidator.create,
  pointsController.create
);

export default routes;
