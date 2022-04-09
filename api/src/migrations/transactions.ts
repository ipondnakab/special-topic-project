import * as dayjs from "dayjs";

const mockDevices = [
  {
    deviceId: 1,
    temperature: 29.26,
    moisture: 57,
    soilMoisture: 50,
    windSpeed: 20.34,
    timestamp: dayjs().subtract(5, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 32.14,
    moisture: 40,
    soilMoisture: 42,
    windSpeed: 12.34,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 30.11,
    moisture: 38,
    soilMoisture: 35,
    windSpeed: 32.34,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 29.19,
    moisture: 62,
    soilMoisture: 60,
    windSpeed: 24.32,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 28.50,
    moisture: 64,
    soilMoisture: 52,
    windSpeed: 30.32,
    timestamp: dayjs().subtract(1, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 37.10,
    moisture: 35,
    soilMoisture: 33,
    windSpeed: 28.32,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 28.50,
    moisture: 54,
    soilMoisture: 50,
    windSpeed: 33.54,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 35.4,
    moisture: 28,
    soilMoisture: 30,
    windSpeed: 8.20,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 27.6,
    moisture: 63,
    soilMoisture: 60,
    windSpeed: 13,
    timestamp: dayjs().subtract(5, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 36.3,
    moisture: 56,
    soilMoisture: 52,
    windSpeed: 23,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 28.6,
    moisture: 75,
    soilMoisture: 73,
    windSpeed: 18,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 34.6,
    moisture: 63,
    soilMoisture: 60,
    windSpeed: 24,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 29.5,
    moisture: 78,
    soilMoisture: 76,
    windSpeed: 16,
    timestamp: dayjs().subtract(1, "hour").toDate(),
  },
  {
    deviceId: 4,
    temperature: 35.3,
    moisture: 61,
    soilMoisture: 59,
    windSpeed: 20,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 4,
    temperature: 27.5,
    moisture: 78,
    soilMoisture: 76,
    windSpeed: 21,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 4,
    temperature: 35.4,
    moisture: 61,
    soilMoisture: 59,
    windSpeed: 22,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 4,
    temperature: 27.6,
    moisture: 78,
    soilMoisture: 79,
    windSpeed: 20,
    timestamp: dayjs().subtract(5, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 36.1,
    moisture: 55,
    soilMoisture: 57,
    windSpeed: 18,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 26.8,
    moisture: 76,
    soilMoisture: 74,
    windSpeed: 18,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 1,
    temperature: 38.2,
    moisture: 52,
    soilMoisture: 50,
    windSpeed: 19,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 29.2,
    moisture: 74,
    soilMoisture: 73,
    windSpeed: 17,
    timestamp: dayjs().subtract(1, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 35.7,
    moisture: 56,
    soilMoisture: 54,
    windSpeed: 20,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 28.6,
    moisture: 76,
    soilMoisture: 77,
    windSpeed: 19,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 2,
    temperature: 34.4,
    moisture: 62,
    soilMoisture: 63,
    windSpeed: 19,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 27.1,
    moisture: 79,
    soilMoisture: 76,
    windSpeed: 17,
    timestamp: dayjs().subtract(5, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 33.5,
    moisture: 67,
    soilMoisture: 55,
    windSpeed: 15,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 26.8,
    moisture: 80,
    soilMoisture: 77,
    windSpeed: 13,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 3,
    temperature: 32.6,
    moisture: 69,
    soilMoisture: 67,
    windSpeed: 16,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 4,
    temperature: 35.3,
    moisture: 61,
    soilMoisture: 59,
    windSpeed: 20,
    timestamp: dayjs().subtract(2, "hour").toDate(),
  },
  {
    deviceId: 4,
    temperature: 25.5,
    moisture: 80,
    soilMoisture: 76,
    windSpeed: 15,
    timestamp: dayjs().subtract(3, "hour").toDate(),
  },
  {
    deviceId: 4,
    temperature: 32.3,
    moisture: 71,
    soilMoisture: 69,
    windSpeed: 15,
    timestamp: dayjs().subtract(4, "hour").toDate(),
  },
  {
    deviceId: 4,
    temperature: 26.4,
    moisture: 84,
    soilMoisture: 80,
    windSpeed: 18,
    timestamp: dayjs().subtract(5, "hour").toDate(),
  },
];

export default mockDevices;
