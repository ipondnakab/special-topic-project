import * as Sequelize from "sequelize";

export const tableName = "schedule";

export enum ScheduleType {
  WEEKLY = "WEEKLY",
  SENSOR = "SENSOR",
}

export interface ScheduleInterface extends Sequelize.Model {
  id: number;
  type: string;
  condition: string;
  value: string;
  period: string;
  activeRelay: number[];
  deviceId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const Schedule = (sequelize: Sequelize.Sequelize) =>
  sequelize.define(
    tableName,
    {
      type: {
        type: Sequelize.ENUM(ScheduleType.WEEKLY, ScheduleType.SENSOR),
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
        field: "active_relay",
        type: Sequelize.STRING,
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
