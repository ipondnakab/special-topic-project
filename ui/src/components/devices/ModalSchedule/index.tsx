import React, { ReactElement, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  Modal,
  Spinner,
  Select,
  TimePicker,
  ButtonGroupPicker,
  ButtonOption,
  RadioGroup,
  CounterInput,
} from "react-rainbow-components";
import Header from "../../Header";
import { FaTemperatureHigh } from "react-icons/fa";
import { Schedule, ScheduleType } from "../../../interfaces/schedule";
import { ContentInput, Form } from "./index.style";

type ScheduleForm = Pick<
  Schedule,
  "id" | "type" | "condition" | "value" | "period" | "activeRelay" | "deviceId"
>;

const optionsType = [
  { value: ScheduleType.WEEKLY, label: "รายสัปดาห์", key: "weekly" },
  { value: ScheduleType.SENSOR, label: "Sensor", key: "sensor" },
];

const optionsDay = [
  { value: "monday", label: "จันทร์" },
  { value: "tuesday", label: "อังคาร" },
  { value: "wednesday", label: "พุธ" },
  { value: "thursday", label: "พฤหัสบดี" },
  { value: "friday", label: "ศุกร์" },
  { value: "satueday", label: "เสาร์" },
  { value: "sunday", label: "อาทิตย์" },
];

const optionsSensor = [
  { value: "temperature", label: "อุณหภูมิ", key: "temperature" },
  { value: "moisture", label: "ความชื้น", key: "moisture" },
  { value: "soilMoisture", label: "ความชื้นของดิน", key: "soilMoisture" },
  { value: "windSpeed", label: "ความเร็วลม", key: "windSpeed" },
];

export type ModalPropsType = {
  isOpen?: boolean;
  deviceId: number;
  onRequestClose?: () => void;
  actionSubmit: (data: Pick<Schedule, any>) => Promise<void>;
  value?: ScheduleForm;
  titleModal: string;
  iconModal: ReactElement<any, any>;
};

const ModalSchedule: React.FC<ModalPropsType> = ({
  isOpen,
  deviceId,
  onRequestClose,
  actionSubmit,
  value,
  titleModal,
  iconModal,
}) => {
  const { register, handleSubmit, setValue, reset, watch } =
    useForm<ScheduleForm>({
      defaultValues: useMemo(() => {
        return value;
      }, [value]),
    });

  const [isLoading, setIsLoading] = React.useState(false);
  const [scheduleType, setScheduleType] = React.useState<ScheduleType>(
    ScheduleType.WEEKLY
  );
  const [activeRelayList, setActiveRelayList] = React.useState<string[]>([]);

  const onSubmit = async (data: ScheduleForm) => {
    setIsLoading(true);
    try {
      if (value?.id) {
        data.id = value.id;
      }
      if (Array.isArray(data.activeRelay)) {
        data.activeRelay = data.activeRelay.join(", ");
      }
      data.type = scheduleType;

      await actionSubmit(data);
      reset();
      setScheduleType(ScheduleType.WEEKLY);
      setActiveRelayList([]);
      onRequestClose && onRequestClose();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setValue("deviceId", deviceId);

    if (value) {
      setScheduleType(value.type);
      setValue("condition", value.condition);
      setValue("value", value.value);
      setValue("period", value.period);
      const activeRelaySplit = value.activeRelay.toString().split(",");
      setActiveRelayList(activeRelaySplit);
      setValue("activeRelay", activeRelaySplit);
    }
  }, [deviceId, scheduleType, setValue, value]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header extraLeft={iconModal} title={titleModal} />
        <ContentInput>
          <div>
            <RadioGroup
              options={optionsType}
              value={scheduleType}
              onChange={(e) => {
                setValue("type", e.target.value as ScheduleType);
                setScheduleType(e.target.value as ScheduleType);
              }}
              label="กรุณาเลือกประเภท Schedule"
            />
          </div>
          {scheduleType === ScheduleType.WEEKLY && (
            <>
              <Select
                key={"condition"}
                label={"กำหนดวัน"}
                labelAlignment="left"
                {...register("condition", { required: "กรุณาเลือกวัน" })}
                onChange={(e) => setValue("condition", e.target.value)}
                options={optionsDay}
                value={watch("condition")}
              />

              {/* <WeekDayPicker
                label={"กำหนดวัน"}
                key={"conditionScheduleWeekly"}
                labelAlignment="left"
                {...register("condition", { required: "กรุณาเลือกวัน" })}
                onChange={(value) => {
                  setValue("condition", value.toString());
                }}
                locale={"th"}
                // value={watch("condition") || "monday"}
              /> */}
              <TimePicker
                key={"valueScheduleWeekly"}
                label="เวลา"
                okLabel={"ตกลง"}
                cancelLabel={"ยกเลิก"}
                value={watch("value")}
                className={"time-picker"}
                labelAlignment="left"
                onChange={(value) => setValue("value", value.toString())}
                hour24
              />
            </>
          )}
          {scheduleType === ScheduleType.SENSOR && (
            <>
              <Select
                key={"conditionScheduleSensor"}
                label={"ชื่อ Sensor"}
                labelAlignment="left"
                {...register("condition", { required: "กรุณาเลือก Sensor" })}
                onChange={(e) => setValue("condition", e.target.value)}
                options={optionsSensor}
                value={watch("condition")}
              />
              <Input
                key={"valueScheduleSensor"}
                icon={<FaTemperatureHigh />}
                label={"อุณหภูมิ (เซลเซียส)"}
                labelAlignment="left"
                placeholder={"อุณหภูมิ (เซลเซียส)..."}
                type={"number"}
                {...register("value", {
                  required: "กรุณากรอกอุณหภูมิ (เซลเซียส)",
                })}
                onChange={(e) => setValue("value", e.target.value)}
                value={watch("value")}
              />
            </>
          )}
          {/* <Input
            key={"period"}
            icon={<GiSandsOfTime />}
            label={"ตั้งเวลาการเปิด Relay (นาที)"}
            labelAlignment="left"
            placeholder={"ตั้งเวลา..."}
            type={"number"}
            {...register("period", {
              required: "กรุณากรอกเวลาสำหรับการเปิด Relay",
            })}
            min={0}
            max={1440}
            onChange={(e) => {
              setValue("period", e.target.value);
            }}
            // value={watch(item.name)}
          /> */}
          <CounterInput
            key={"period"}
            label={"ตั้งเวลาการเปิด Relay (นาที)"}
            labelAlignment="left"
            placeholder={"ตั้งเวลา..."}
            min={1}
            max={1440}
            onChange={(value) => {
              setValue("period", value);
            }}
            value={watch("period")}
          />
          <ButtonGroupPicker
            onChange={(value) => {
              const activeRelayCopy = activeRelayList;
              const newRelay = value[0].toString();
              if (activeRelayCopy.indexOf(newRelay) === -1) {
                activeRelayCopy.push(newRelay);
              }
              setActiveRelayList(activeRelayCopy);
              setValue("activeRelay", activeRelayCopy);
            }}
            value={activeRelayList}
            name="activeRelay"
            key="activeRelay"
            multiple
          >
            <ButtonOption label={"สวิตซ์ 1"} name="1" key="activeRelay1" />
            <ButtonOption label={"สวิตซ์ 2"} name="2" key="activeRelay2" />
            <ButtonOption label={"สวิตซ์ 3"} name="3" key="activeRelay3" />
            <ButtonOption label={"สวิตซ์ 4"} name="4" key="activeRelay4" />
          </ButtonGroupPicker>
        </ContentInput>
        <Button
          type="submit"
          variant="success"
          style={{ margin: "0 auto", width: 240 }}
          disabled={isLoading}
        >
          <> {isLoading && <Spinner size="small" />}บันทึก</>
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalSchedule;
