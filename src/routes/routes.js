import express from "express";
import { UserController } from "../controller/user.controller.js";
import { ProductController } from "../controller/product.controller.js";
const user = new UserController();
const product = new ProductController();

const router = express.Router();

router.post("/user/add", user.add);

router.post("/product/add", product.add);
router.get("/product/find-all", product.findAll);


export default router;
