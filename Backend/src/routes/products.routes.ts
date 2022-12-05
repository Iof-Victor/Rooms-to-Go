import express from "express";
const bcrypt = require("bcrypt");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.post("/api/createProduct", productsController.createProduct);

router.get("/api/getAllProducts", productsController.getAllProducts);

router.get(
  "/api/getAllInStockProducts",
  productsController.getAllInStockProducts
);

export { router as productRouter };
