import * as Sequelize from "sequelize";
import models from "./models";
import mockupDevices from "./migrations/devices";
import mockupTransactions from "./migrations/transactions";

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

// Initialize models
export const Devices = models.Devices(sequelize);
export const Transactions = models.Transactions(sequelize);

// Sync all models that have been defined above to the database.
Devices.sync({ force: true })
  .then(() => Devices.bulkCreate(mockupDevices)) //Mockup data
  .catch((error) => console.log({ error }));
Transactions.sync({ force: true })
  .then(() => Transactions.bulkCreate(mockupTransactions)) //Mockup data
  .catch((error) => console.log({ error }));

export const connection = async () => sequelize.authenticate();

export default sequelize;
