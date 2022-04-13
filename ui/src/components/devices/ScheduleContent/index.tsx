import React from "react";
import { IoIosAdd } from "react-icons/io";
import { Button, ButtonIcon, Spinner } from "react-rainbow-components";
import { Device } from "../../../interfaces/devices";
import { Schedule, ScheduleType } from "../../../interfaces/schedule";
import Header from "../../Header";
import {
  CardSchedule,
  Container,
  ContentContainer,
  IconContainer,
  Label,
} from "./index.style";
import { transactionList } from "../index.config";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {useScheduleContext} from "../../../pages/devices/useSchedule";

export type ScheduleContentPropsType = {
  device: Device;
  setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
  openEditModalSchedule: (schedule: Schedule) => void;
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

const ScheduleContent: React.FC<ScheduleContentPropsType> = ({
  device,
  setModalCreate,
  openEditModalSchedule,
}) => {
  const { schedule, setValueDeviceId, onDeleteSchedule, isLoading } = useScheduleContext();

  React.useEffect(() => {
    setValueDeviceId(device.id);
  }, [device, setValueDeviceId]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Container>
      <Header
        title={"การทำงานอัตโนมัติ"}
        extraRight={
          <Button
            size="small"
            onClick={() => {
              setModalCreate(true);
            }}
          >
            <>
              <IoIosAdd
                style={{
                  marginRight: 8,
                }}
              />
              เพิ่มเงื่อนไข
            </>
          </Button>
        }
      />
      <ContentContainer>
        {!isLoading &&
          schedule &&
          schedule.length > 0 &&
          schedule.map((item) => {
            const isWeekly = item.type === ScheduleType.WEEKLY;
            const sensorDetail = transactionList.find(
              (i) => i.name === item.condition
            );
            return (
              <CardSchedule key={item.id}>
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
                    isWeekly
                      ? dayToThai[item.condition.toString()]
                      : sensorDetail?.label
                  }
                  extraRight={
                    <>
                      <Label>
                        {item.value} {isWeekly ? "น." : sensorDetail?.unit}
                      </Label>
                      <ButtonIcon
                        variant="base"
                        size="medium"
                        tooltip="แก้ไข"
                        onClick={() => openEditModalSchedule(item)}
                        icon={<FaPencilAlt />}
                      />
                      <ButtonIcon
                        variant="base"
                        size="medium"
                        tooltip="ลบ"
                        icon={<FaTrashAlt />}
                        onClick={() => onDeleteSchedule(item.id.toString())}
                      />
                    </>
                  }
                  hideLine
                />
                <Label>
                  เปิดสวิทช์ {item.activeRelay} เป็นเวลา {item.period} นาที
                </Label>
              </CardSchedule>
            );
          })}
      </ContentContainer>
    </Container>
  );
};

export default ScheduleContent;
