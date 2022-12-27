import express from "express";
const bcrypt = require("bcrypt");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

router.post("/api/addToCart", cartController.addToCart);

export { router as cartRouter };
