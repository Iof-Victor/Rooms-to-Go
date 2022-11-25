import express from "express";
import { User } from "../../entities/User";
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/api/user", async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    username,
    email,
    password,
    phoneNumber,
    address,
  } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);
  const user = User.create({
    id: id,
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: hashPassword,
    phoneNumber: phoneNumber,
    address: address,
  });

  await user.save();

  return res.json(user);
});

export { router as createUserRouter };
