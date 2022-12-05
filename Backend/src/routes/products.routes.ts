import express from "express";
const bcrypt = require("bcrypt");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.post("/api/createProduct", productsController.createProduct);

export { router as productRouter };
