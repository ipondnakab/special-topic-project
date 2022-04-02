import sequelize from "../database";
import * as Sequelize from "sequelize";

export const tableName = "devices";
const Devices = sequelize.define(
  tableName,
  {
    name: {
      type: Sequelize.STRING,
      field: "name",
    },
    ipAddress: {
      type: Sequelize.STRING,
      field: "ip_address",
    },
    wifiName: {
      type: Sequelize.STRING,
      field: "wifi_name",
    },
    wifiPassword: {
      type: Sequelize.STRING,
      field: "wifi_password",
    },
    statusRelay1: {
      type: Sequelize.BOOLEAN,
      field: "status_relay_1",
    },
    statusRelay2: {
      type: Sequelize.BOOLEAN,
      field: "status_relay_2",
    },
    statusRelay3: {
      type: Sequelize.BOOLEAN,
      field: "status_relay_3",
    },
    statusRelay4: {
      type: Sequelize.BOOLEAN,
      field: "status_relay_4",
    },
  },
  {
    freezeTableName: true,
  }
);
Devices.sync({ force: true });

export default Devices;
