import express from "express";
const bcrypt = require("bcrypt");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.post("/api/createUser", usersController.register);

router.post("/api/loginUser", usersController.login);

export { router as userRouter };
