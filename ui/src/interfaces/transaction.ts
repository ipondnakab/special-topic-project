export type Transaction = {
  id: number;
  deviceId: number;
  temperature: number;
  moisture: number;
  soilMoisture: number;
  windSpeed: number;
  timestamp?: Date;
  createAt?: Date;
  updatedAt?: Date;
};
