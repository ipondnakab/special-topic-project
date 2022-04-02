import sequelize from "../database";
import * as Sequelize from "sequelize";

export const tableName = "devices";
const Devices = sequelize.define(
  tableName,
  {
    deviceId: {
      type: Sequelize.UUID,
      field: "device_id",
    },
    temperature: {
      type: Sequelize.NUMBER,
      field: "temperature",
    },
    moisture: {
      type: Sequelize.NUMBER,
      field: "moisture",
    },
    soilMoisture: {
      type: Sequelize.NUMBER,
      field: "soil_moisture",
    },
    windSpeed: {
      type: Sequelize.NUMBER,
      field: "wind_speed",
    },
    timestamp: {
      type: Sequelize.NUMBER,
      field: "timestamp",
    },
  },
  {
    freezeTableName: true,
  }
);
Devices.sync({ force: true });

export default Devices;
