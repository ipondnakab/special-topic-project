import React, { ReactElement, useEffect, useMemo } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
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
} from "react-rainbow-components";
import Header from "../../Header";
import { GiSandsOfTime } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { Schedule, ScheduleType } from "../../../interfaces/schedule";
import { ContentInput, Form } from "./index.style";

type ScheduleForm = Pick<
  Schedule,
  "id" | "type" | "condition" | "value" | "period" | "activeRelay" | "deviceId"
>;

const optionsType = [
  { value: ScheduleType.WEEKLY, label: "รายสัปดาห์" },
  { value: ScheduleType.SENSOR, label: "Sensor" },
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
  { value: "temperature", label: "อุณหภูมิ" },
  { value: "moisture", label: "ความชื้น" },
  { value: "soilMoisture", label: "ความชื้นของดิน" },
  { value: "windSpeed", label: "ความเร็วลม" },
];

export type ModalPropsType = {
  isOpen?: boolean;
  deviceId: number;
  onRequestClose?: () => void;
  actionSubmit: () => void;
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
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    watch,
  } = useForm<ScheduleForm>({
    defaultValues: useMemo(() => {
      return value;
    }, [value]),
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [scheduleType, setScheduleType] = React.useState<ScheduleType>(
    ScheduleType.WEEKLY
  );

  const onSubmit = async (data: ScheduleForm) => {
    setIsLoading(true);
    try {
      if (value?.id) {
        data.id = value.id;
      }
      // await actionSubmit(data);
      reset();
      onRequestClose && onRequestClose();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setValue("type", scheduleType);
    if (value) {
      setValue("condition", value.condition);
      setValue("value", value.value);
      setValue("period", value.period);
      setValue("activeRelay", value.activeRelay);
    }
  }, [scheduleType, setValue, value]);

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
          /></div>
          {scheduleType === ScheduleType.WEEKLY && (
            <>
              <Select
                key={"condition"}
                label={"กำหนดวัน"}
                labelAlignment="left"
                // error={errors[item.name]?.message}
                {...register("condition", { required: "กรุณาเลือกวัน" })}
                onChange={(e) => setValue("condition", e.target.value)}
                options={optionsDay}
                // value={watch(item.name)}
              />
              <TimePicker
                label="เวลา"
                okLabel={"ตกลง"}
                cancelLabel={"ยกเลิก"}
                value={"10:22"}
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
                key={"condition"}
                label={"ชื่อ Sensor"}
                labelAlignment="left"
                // error={errors[item.name]?.message}
                {...register("condition", { required: "กรุณาเลือก Sensor" })}
                onChange={(e) => setValue("condition", e.target.value)}
                options={optionsSensor}
                // value={watch(item.name)}
              />
              <Input
                key={"value"}
                icon={<FaTemperatureHigh />}
                label={"อุณหภูมิ (เซลเซียส)"}
                labelAlignment="left"
                placeholder={"อุณหภูมิ (เซลเซียส)..."}
                type={"number"}
                // error={errors[item.name]?.message}
                {...register("value", {
                  required: "กรุณากรอกอุณหภูมิ (เซลเซียส)",
                })}
                onChange={(e) => setValue("value", e.target.value)}
                // value={watch(item.name)}
              />
            </>
          )}
          <Input
            key={"period"}
            icon={<GiSandsOfTime />}
            label={"ตั้งเวลาการเปิด Relay (นาที)"}
            labelAlignment="left"
            placeholder={"ตั้งเวลา..."}
            type={"number"}
            // error={errors[item.name]?.message}
            {...register("period", {
              required: "กรุณากรอกเวลาสำหรับการเปิด Relay",
            })}
            onChange={(e) => setValue("period", e.target.value)}
            // value={watch(item.name)}
          />
          <ButtonGroupPicker
            id="button-group-picker-component-3"
            // className="rainbow-m-around_medium"
            // value={watch(item.name)}
            // onChange={(value) => setValue("activeRelay", value)}
            value={["1", "3"]}
            name="activeRelay"
            multiple
          >
            <ButtonOption label={"สวิตซ์ 1"} name="1" />
            <ButtonOption label={"สวิตซ์ 2"} name="2" />
            <ButtonOption label={"สวิตซ์ 3"} name="3" />
            <ButtonOption label={"สวิตซ์ 4"} name="4" />
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
