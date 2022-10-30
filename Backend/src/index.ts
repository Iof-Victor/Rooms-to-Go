import { DataSource } from "typeorm";
require("dotenv").config({ path: "./env" });
import { User } from "./entities/User";
import { Product } from "./entities/Product";
import { Order } from "./entities/Order";

const main = async () => {
  try {
    let datasource = new DataSource({
      type: "postgres",
      host: process.env.HOST,
      port: parseInt(process.env.PORT || ""),
      username: process.env.USERNAME,
      password: undefined,
      database: process.env.DB_NAME,
      entities: [User, Product, Order],
      synchronize: true,
    });

    let connection = await datasource.initialize();
    console.log("Conntected to database");
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to db");
  }
};

main();
