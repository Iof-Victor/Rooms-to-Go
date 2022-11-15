import express from "express";
import { User } from "src/entities/User";

const router = express.Router();

router.delete("/api/user", (req, res) => {
  res.send("Delete users");
});

export { router as createUserRouter };
