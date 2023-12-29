import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";

const dbName = process.env.DB_NAME || "db";
const dbUser = process.env.DB_USER || "root";
const dbPassword = process.env.DB_PASSWORD || "123456";
const dbHost = process.env.DB_HOST || "localhost";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

export default sequelize;
