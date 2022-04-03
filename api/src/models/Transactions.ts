import * as Sequelize from "sequelize";

export const tableName = "transactions";

export interface TransactionInstance extends Sequelize.Model {
  id: number;
  deviceId: number;
  temperature: number;
  moisture: number;
  soilMoisture: number;
  windSpeed: number;
  createAt?: Date;
  updatedAt?: Date;
}

const Transaction = (sequelize: Sequelize.Sequelize) =>
  sequelize.define(
    tableName,
    {
      deviceId: {
        type: Sequelize.INTEGER,
        field: "device_id",
      },
      temperature: {
        type: Sequelize.DOUBLE,
        field: "temperature",
      },
      moisture: {
        type: Sequelize.DOUBLE,
        field: "moisture",
      },
      soilMoisture: {
        type: Sequelize.DOUBLE,
        field: "soil_moisture",
      },
      windSpeed: {
        type: Sequelize.DOUBLE,
        field: "wind_speed",
      },
      timestamp: {
        type: Sequelize.DATE,
        field: "timestamp",
      },
    },
    {
      freezeTableName: true,
    }
  );

export default Transaction;
