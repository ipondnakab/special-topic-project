import { ScheduleType } from "../models/Schedule";

const mockSchedule = [
  {
    type: ScheduleType.WEEKLY,
    condition: "sunday",
    value: "10:00",
    period: "30",
    activeRelay: [1, 2].join(", "),
    deviceId: 1,
  },
  {
    type: ScheduleType.SENSOR,
    condition: "temperature",
    value: "37.4",
    period: "60",
    activeRelay: [1, 2].join(", "),
    deviceId: 1,
  },
  {
    type: ScheduleType.WEEKLY,
    condition: "monday",
    value: "11:00",
    period: "30",
    activeRelay: [2, 3].join(", "),
    deviceId: 2,
  },
  {
    type: ScheduleType.SENSOR,
    condition: "moisture",
    value: "33.6",
    period: "60",
    activeRelay: [2, 3].join(", "),
    deviceId: 2,
  },
  {
    type: ScheduleType.WEEKLY,
    condition: "tuesday",
    value: "09:00",
    period: "30",
    activeRelay: [3, 4].join(", "),
    deviceId: 3,
  },
  {
    type: ScheduleType.SENSOR,
    condition: "temperature",
    value: "35.4",
    period: "60",
    activeRelay: [3, 4].join(", "),
    deviceId: 3,
  },
  {
    type: ScheduleType.WEEKLY,
    condition: "wednesday",
    value: "15:00",
    period: "30",
    activeRelay: [4, 1].join(", "),
    deviceId: 4,
  },
  {
    type: ScheduleType.SENSOR,
    condition: "temperature",
    value: "34.2",
    period: "60",
    activeRelay: [4, 1].join(", "),
    deviceId: 4,
  },
  {
    type: ScheduleType.WEEKLY,
    condition: "thursday",
    value: "17:00",
    period: "35",
    activeRelay: [1, 2, 3].join(", "),
    deviceId: 1,
  },
  {
    type: ScheduleType.SENSOR,
    condition: "temperature",
    value: "34.2",
    period: "60",
    activeRelay: [1, 2, 3].join(", "),
    deviceId: 1,
  },
  {
    type: ScheduleType.WEEKLY,
    condition: "friday",
    value: "14:07",
    period: "15",
    activeRelay: [1, 2, 3, 4].join(", "),
    deviceId: 2,
  },
  {
    type: ScheduleType.SENSOR,
    condition: "moisture",
    value: "37.3",
    period: "60",
    activeRelay: [1, 2, 3, 4].join(", "),
    deviceId: 2,
  },
];

export default mockSchedule;
