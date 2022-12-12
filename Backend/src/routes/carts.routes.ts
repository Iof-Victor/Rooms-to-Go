import express from "express";
const bcrypt = require("bcrypt");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

router.post("/api/saveProductToCart", cartController.saveProductToCart);

export { router as cartRouter };
