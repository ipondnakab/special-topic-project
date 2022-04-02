import * as Sequelize from "sequelize";

export const tableName = "devices";
export interface DevicesInterface extends Sequelize.Model {
  id: number;
  name: string;
  ipAddress: string;
  wifiName: string;
  wifiPassword: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const Devices = (sequelize: Sequelize.Sequelize) =>
  sequelize.define(
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
        defaultValue: false,
      },
      statusRelay2: {
        type: Sequelize.BOOLEAN,
        field: "status_relay_2",
        defaultValue: false,
      },
      statusRelay3: {
        type: Sequelize.BOOLEAN,
        field: "status_relay_3",
        defaultValue: false,
      },
      statusRelay4: {
        type: Sequelize.BOOLEAN,
        field: "status_relay_4",
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

export default Devices;
