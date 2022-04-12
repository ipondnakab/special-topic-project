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
import { getScheduleByDeviceId } from "../../../apis/schedules";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useDevicesContext } from "../../../pages/devices/useDevices";

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
  const [loading, setLoading] = React.useState(false);
  const [schedule, setSchedle] = React.useState<Schedule[]>([]);
  const { onDeleteSchedule } = useDevicesContext();

  const getScheduleById = React.useCallback(async (id: string) => {
    try {
      const response = await getScheduleByDeviceId(id);
      if (!response) return;
      setSchedle(response);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  React.useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await getScheduleById(device.id);
      setLoading(false);
    };
    fetch();
  }, [device, getScheduleById]);

  return loading ? (
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
        {!loading &&
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