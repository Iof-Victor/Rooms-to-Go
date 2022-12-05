import { DataSource } from "typeorm";
require("dotenv").config({ path: "./env" });
import { User } from "./entities/User";
import { Product } from "./entities/Product";
import { Order } from "./entities/Order";
import express from "express";
import { userRouter } from "./routes/userRoutes/users.routes";

const app = express();

const main = async () => {
  try {
    let datasource = new DataSource({
      type: "postgres",
      host: process.env.HOST,
      port: parseInt(process.env.PORT || ""),
      username: process.env.USERNAME,
      password: undefined,
      database: process.env.DB_NAME,
      entities: [User, Product],
      synchronize: true,
    });

    let connection = await datasource.initialize();
    console.log("Conntected to database");

    app.use(express.json());
    app.use(userRouter);

    app.listen(8080, () => {
      console.log("Now running on port 8080");
    });
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to db");
  }
};

main();
