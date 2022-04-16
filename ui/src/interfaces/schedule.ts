export enum ScheduleType {
  WEEKLY = "WEEKLY",
  SENSOR = "SENSOR",
}
export type Schedule = {
  id: number;
  type: ScheduleType;
  condition: string;
  value: string;
  period: number;
  activeRelay: string | string[];
  deviceId: number;
  createdAt?: Date;
  updatedAt?: Date;
};
