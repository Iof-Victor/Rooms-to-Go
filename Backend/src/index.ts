import { DataSource } from "typeorm";
require("dotenv").config({ path: "./env" });
import { User } from "./entities/User";
import { Product } from "./entities/Product";
import { Order } from "./entities/Order";
import express from "express";
import { userRouter } from "./routes/users.routes";
import { productRouter } from "./routes/products.routes";

const app = express();

export const datasource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: parseInt(process.env.PORT || ""),
  username: process.env.USERNAME,
  password: undefined,
  database: process.env.DB_NAME,
  entities: [User, Product],
  synchronize: true,
});

const main = async () => {
  try {
    let connection = await datasource.initialize();
    console.log("Conntected to database");

    app.use(express.json());
    app.use(userRouter);
    app.use(productRouter);

    app.listen(8080, () => {
      console.log("Now running on port 8080");
    });
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to db");
  }
};

main();
