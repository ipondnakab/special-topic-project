import * as dayjs from "dayjs";

const mockDevices = [
  {
    deviceId: 1,
    temperature: 29.26,
    moisture: 24.52,
    soilMoisture: 60.24,
    windSpeed: 20.34,
    timestamp: dayjs().subtract(5, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 32.14,
    moisture: 17.23,
    soilMoisture: 45.94,
    windSpeed: 12.34,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 30.11,
    moisture: 11.23,
    soilMoisture: 30.04,
    windSpeed: 32.34,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 29.19,
    moisture: 15.23,
    soilMoisture: 24.44,
    windSpeed: 24.32,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 28.50,
    moisture: 14.20,
    soilMoisture: 30.22,
    windSpeed: 30.32,
    timestamp: dayjs().subtract(1, "hour").toDate(),
  },
];

export default mockDevices;
