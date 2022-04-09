export type Schedule = {
  id: number;
  type: string;
  condition: string;
  value: string;
  period: string;
  activeRelay: number[];
  deviceId: number;
  createdAt?: Date;
  updatedAt?: Date;
};
