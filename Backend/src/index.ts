import { DataSource } from "typeorm";
require("dotenv").config({ path: "./env" });

const main = async () => {
  try {
    let datasource = new DataSource({
      type: "postgres",
      host: process.env.HOST,
      port: parseInt(process.env.PORT || ""),
      username: process.env.USERNAME,
      password: undefined,
      database: process.env.DB_NAME,
    });

    let connection = await datasource.initialize();
    console.log("Conntected to database");
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to db");
  }
};

main();
