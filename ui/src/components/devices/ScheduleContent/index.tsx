import React from "react";
import { IoIosAdd } from "react-icons/io";
import { Button, Spinner } from "react-rainbow-components";
import { Device } from "../../../interfaces/devices";
import { Schedule, ScheduleType } from "../../../interfaces/schedule";
import Header from "../../Header";
import { CardSchedule, IconContainer, Label } from "./index.style";
import { transactionList } from "../index.config";
export type ScheduleContentPropsType = {
  device: Device;
};

const dayToThai: { [key: string]: string } = {
  monday: "จันทร์",
  tuesday: "อังคาร",
  wednesday: "พุธ",
  thursday: "พฤหัสบดี",
  friday: "ศุกร์",
  saturday: "เสาร์",
  sunday: "อาทิตย์",
};

const ScheduleContent: React.FC<ScheduleContentPropsType> = ({ device }) => {
  const [loading, setLoading] = React.useState(false);
  const [schedule] = React.useState<Schedule[] | "loading">([
    {
      id: 1,
      type: ScheduleType.WEEKLY,
      condition: "sunday",
      value: "10:00",
      period: "30",
      deviceId: 1,
      activeRelay: [1, 2],
    },
    {
      id: 2,
      type: ScheduleType.SENSOR,
      condition: "temperature",
      value: "28",
      period: "30",
      deviceId: 1,
      activeRelay: [1, 2],
    },
    {
      id: 3,
      type: ScheduleType.WEEKLY,
      condition: "sunday",
      value: "10:00",
      period: "30",
      deviceId: 1,
      activeRelay: [1, 2],
    },
    {
      id: 4,
      type: ScheduleType.SENSOR,
      condition: "temperature",
      value: "28",
      period: "30",
      deviceId: 1,
      activeRelay: [1, 2],
    },
    {
      id: 5,
      type: ScheduleType.WEEKLY,
      condition: "sunday",
      value: "10:00",
      period: "30",
      deviceId: 1,
      activeRelay: [1, 2],
    },
    {
      id: 6,
      type: ScheduleType.SENSOR,
      condition: "temperature",
      value: "28",
      period: "30",
      deviceId: 1,
      activeRelay: [1, 2],
    },
  ]);

  React.useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setLoading(false);
    };
    fetch();
  }, [device]);
  return loading ? (
    <Spinner />
  ) : (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflow: "scroll",
      }}
    >
      <Header
        title={"การทำงานอัตโนมัติ"}
        extraRight={
          <Button size="small">
            <>
              <IoIosAdd
                style={{
                  marginRight: 8,
                }}
              />
              เงือนไข
            </>
          </Button>
        }
      />
      <div style={{ flex: 1, overflow: "scroll" }}>
        {schedule !== "loading" &&
          schedule.map((item) => {
            const isWeekly = item.type === ScheduleType.WEEKLY;
            const sensorDetail = transactionList.find(
              (i) => i.name === item.condition
            );
            return (
              <CardSchedule>
                <IconContainer isWeekly={isWeekly}>
                  {isWeekly ? (
                    <>
                      <span>WEEKLY</span>
                    </>
                  ) : (
                    <>
                      <span>SENSOR</span>
                    </>
                  )}
                </IconContainer>
                <Header
                  fontSize="1.25rem"
                  title={
                    isWeekly ? dayToThai[item.condition] : sensorDetail?.label
                  }
                  extraRight={
                    <Label>
                      {item.value} {isWeekly ? "น." : sensorDetail?.unit}
                    </Label>
                  }
                  hideLine
                />
                <Label>
                  เปิดสวิทช์ {item.activeRelay.join(", ")} เป็นเวลา{" "}
                  {item.period} นาที
                </Label>
              </CardSchedule>
            );
          })}
      </div>
    </div>
  );
};

export default ScheduleContent;
