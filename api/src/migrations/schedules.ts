import { ScheduleType } from "../models/Schedule";

const mockSchedule = [
  {
    type: ScheduleType.WEEKLY,
    condition: "sunday",
    value: "10:00",
    period: "30",
    activeRelay: [1, 2],
    deviceId: 1,
  },
  {
    type: ScheduleType.SENSOR,
    condition: "A",
    value: "37",
    period: "30",
    activeRelay: [1, 2],
    deviceId: 1,
  },
  {
    type: ScheduleType.WEEKLY,
    condition: "monday",
    value: "11:00",
    period: "45",
    activeRelay: [2, 3],
    deviceId: 2,
  },
  {
    type: ScheduleType.SENSOR,
    condition: "B",
    value: "40",
    period: "60",
    activeRelay: [2, 3],
    deviceId: 2,
  },
];

export default mockSchedule;
