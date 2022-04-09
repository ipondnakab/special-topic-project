import * as Sequelize from "sequelize";

export const tableName = "cchedule";
export interface ScheduleInterface extends Sequelize.Model {
  id: number;
  name: string;
  ipAddress: string;
  wifiName: string;
  wifiPassword: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const Schedule = (sequelize: Sequelize.Sequelize) =>
  sequelize.define(
    tableName,
    {
      type: {
        type: Sequelize.ENUM("weekly", "censor"),
        field: "type",
      },
      condition: {
        type: Sequelize.STRING,
        field: "condition",
      },
      value: {
        type: Sequelize.STRING,
        field: "value",
      },
      period: {
        type: Sequelize.INTEGER,
        field: "period",
      },
      activeRelay: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        field: "active_relay",
      },
      deviceId: {
        type: Sequelize.INTEGER,
        field: "deviceId",
      },
    },
    {
      freezeTableName: true,
    }
  );

export default Schedule;
