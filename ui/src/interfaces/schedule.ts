export enum ScheduleType {
    WEEKLY = "WEEKLY",
    SENSOR = "SENSOR",
  }
export type Schedule = {
  id: number;
  type: ScheduleType;
  condition: string;
  value: string;
  period: string;
  activeRelay: number[];
  deviceId: number;
  createdAt?: Date;
  updatedAt?: Date;
};
