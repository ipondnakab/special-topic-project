import * as Sequelize from "sequelize";

const sequelize = new Sequelize.Sequelize(
  process.env.POSTGRES_DB || "database",
  process.env.POSTGRES_USER || "user",
  process.env.POSTGRES_PASSWORD || "root",
  {
    host: process.env.POSTGRES_HOST || "localhost",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

export default sequelize;

export const connection = async () => {
  sequelize.authenticate();
};
