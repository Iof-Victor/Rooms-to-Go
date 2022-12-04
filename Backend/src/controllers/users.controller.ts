import express from "express";
import { Request, Response } from "express";
import { User } from "../entities/User";
const bcrypt = require("bcrypt");
const router = express.Router();

const register = async (req: Request, res: Response, next: any) => {
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    phoneNumber,
    address,
  } = req.body;

  let isUsernameAvailable: User | null;
  let isEmailAvailable: User | null;

  isUsernameAvailable = await User.findOne({
    where: { username: username },
  });

  isEmailAvailable = await User.findOne({
    where: { email: email },
  });

  let errors: any = {};
  if (isUsernameAvailable) errors.username = "Username already exists";
  if (isEmailAvailable) errors.email = "Email already exists";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = User.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashPassword,
      phoneNumber: phoneNumber,
      address: address,
    });
    return res.json(await user.save());
  } catch (err) {
    console.error("Error while trying to save the user!!");
    return res.status(500).json(err);
  }
};

module.exports = {
  register,
};
