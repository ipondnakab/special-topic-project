import sequelize from "../database";
import * as Sequelize from "sequelize";
import mockup from "../migrations/transactions";

export const tableName = "transactions";

const Transaction = sequelize.define(
  tableName,
  {
    deviceId: {
      type: Sequelize.NUMBER,
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
  },
  {
    freezeTableName: true,
  }
);

Transaction.sync({ force: true }).then(async () => {
  for (const iterator of mockup) {
    console.log({ iterator });
    await Transaction.create(iterator);
  }
});

export default Transaction;
