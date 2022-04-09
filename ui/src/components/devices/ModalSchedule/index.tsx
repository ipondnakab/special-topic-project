import React, { ReactElement, useEffect, useMemo } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import {
  Button,
  Input,
  Modal,
  Spinner,
  Select,
  TimePicker,
} from "react-rainbow-components";
import Header from "../../Header";
import { GiSandsOfTime } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { MdSensors } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import styled from "styled-components";
import { Schedule, ScheduleType } from "../../../interfaces/schedule";
const ContentInput = styled.div`
  padding: 1.5rem 1rem;
  & > div {
    margin-bottom: 0.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

type ScheduleForm = Pick<
  Schedule,
  "id" | "type" | "condition" | "value" | "period" | "activeRelay" | "deviceId"
>;

const inputsType: {
  label: string;
  icon: JSX.Element;
  placeholder: string;
  name: keyof ScheduleForm;
  rules: RegisterOptions;
  type?: "radio";
  value?: string;
}[] = [
  {
    label: "รายสัปดาห์",
    icon: <></>,
    placeholder: "",
    name: "type",
    rules: { required: "กรุณาเลือกประเภท Schedule" },
    type: "radio",
    value: ScheduleType.WEEKLY,
  },
  {
    label: "Sensor",
    icon: <></>,
    placeholder: "",
    name: "type",
    rules: { required: "กรุณาเลือกประเภท Schedule" },
    type: "radio",
    value: ScheduleType.SENSOR,
  },
];

const inputsWeekly: {
  label: string;
  icon: JSX.Element;
  placeholder: string;
  name: keyof ScheduleForm;
  rules: RegisterOptions;
  type?: "text" | "checkbox" | "number";
  value?: string;
}[] = [
  {
    label: "ตั้งเวลาการเปิด Relay (นาที)",
    icon: <GiSandsOfTime />,
    placeholder: "ตั้งเวลา...",
    name: "period",
    rules: { required: "กรุณากรอกเวลาสำหรับการเปิด Relay" },
    type: "number",
  },
  {
    label: "สวิตซ์ 1",
    icon: <></>,
    placeholder: "",
    name: "activeRelay",
    rules: { required: "กรุณาเลือก Relay ที่ต้องการเปิด" },
    type: "checkbox",
    value: "1",
  },
  {
    label: "สวิตซ์ 2",
    icon: <></>,
    placeholder: "",
    name: "activeRelay",
    rules: { required: "กรุณาเลือก Relay ที่ต้องการเปิด" },
    type: "checkbox",
    value: "2",
  },
  {
    label: "สวิตซ์ 3",
    icon: <></>,
    placeholder: "",
    name: "activeRelay",
    rules: { required: "กรุณาเลือก Relay ที่ต้องการเปิด" },
    type: "checkbox",
    value: "3",
  },
  {
    label: "สวิตซ์ 4",
    icon: <></>,
    placeholder: "",
    name: "activeRelay",
    rules: { required: "กรุณาเลือก Relay ที่ต้องการเปิด" },
    type: "checkbox",
    value: "4",
  },
];

const inputsSensor: {
  label: string;
  icon: JSX.Element;
  placeholder: string;
  name: keyof ScheduleForm;
  rules: RegisterOptions;
  type?: "text" | "checkbox" | "number";
  value?: string;
}[] = [
  {
    label: "ชื่อ Sensor",
    icon: <MdSensors />,
    placeholder: "ชื่อ Sensor...",
    name: "condition",
    rules: { required: "กรุณากรอกชื่อ Sensor" },
  },
  {
    label: "อุณหภูมิ (เซลเซียส)",
    icon: <FaTemperatureHigh />,
    placeholder: "อุณหภูมิ (เซลเซียส)...",
    name: "value",
    rules: { required: "กรุณากรอกอุณหภูมิ (เซลเซียส)" },
    type: "number",
  },
  {
    label: "ตั้งเวลาการเปิด Relay (นาที)",
    icon: <GiSandsOfTime />,
    placeholder: "ตั้งเวลา...",
    name: "period",
    rules: { required: "กรุณากรอกเวลาสำหรับการเปิด Relay" },
    type: "number",
  },
  {
    label: "สวิตซ์ 1",
    icon: <></>,
    placeholder: "",
    name: "activeRelay",
    rules: { required: "กรุณาเลือก Relay ที่ต้องการเปิด" },
    type: "checkbox",
    value: "1",
  },
  {
    label: "สวิตซ์ 2",
    icon: <></>,
    placeholder: "",
    name: "activeRelay",
    rules: { required: "กรุณาเลือก Relay ที่ต้องการเปิด" },
    type: "checkbox",
    value: "2",
  },
  {
    label: "สวิตซ์ 3",
    icon: <></>,
    placeholder: "",
    name: "activeRelay",
    rules: { required: "กรุณาเลือก Relay ที่ต้องการเปิด" },
    type: "checkbox",
    value: "3",
  },
  {
    label: "สวิตซ์ 4",
    icon: <></>,
    placeholder: "",
    name: "activeRelay",
    rules: { required: "กรุณาเลือก Relay ที่ต้องการเปิด" },
    type: "checkbox",
    value: "4",
  },
];

const optionsDay = [
  { value: "monday", label: "monday" },
  { value: "tuesday", label: "tuesday" },
  { value: "wednesday", label: "wednesday" },
  { value: "thursday", label: "thursday" },
  { value: "friday", label: "friday" },
  { value: "satueday", label: "satueday" },
  { value: "sunday", label: "sunday" },
];

export type ModalPropsType = {
  isOpen?: boolean;
  onRequestClose?: () => void;
  // actionSubmit: (data: Pick<Schedule, any>) => Promise<void>;
  value?: ScheduleForm;
  titleModal: string;
  iconModal: ReactElement<any, any>;
};

const ModalSchedule: React.FC<ModalPropsType> = ({
  isOpen,
  onRequestClose,
  // actionSubmit,
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
  }, [setValue, value]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header extraLeft={iconModal} title={titleModal} />
        <ContentInput>
          {inputsType.map((item) => (
            <Input
              key={item.name + item.value}
              icon={item.icon}
              label={item.label}
              labelAlignment="left"
              placeholder={item.placeholder}
              type={item.type}
              {...register(item.name, item.rules)}
              onChange={(e) => {
                console.log(value);
                if (item.value) {
                  setValue(item.name, item.value);
                  setScheduleType(item.value as ScheduleType);
                }
              }}
              // value={watch(item.name)}
            />
          ))}
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
                labelAlignment="left"
                onChange={(value) => setValue("value", value.toString())}
                hour24
              />
              {inputsWeekly.map((item) => (
                <Input
                  key={item.name}
                  icon={item.icon}
                  label={item.label}
                  labelAlignment="left"
                  placeholder={item.placeholder}
                  type={item.type}
                  // error={errors[item.name]?.message}
                  {...register(item.name, item.rules)}
                  onChange={(e) => setValue(item.name, e.target.value)}
                  // value={watch(item.name)}
                />
              ))}
            </>
          )}
          {scheduleType === ScheduleType.SENSOR &&
            inputsSensor.map((item) => (
              <Input
                key={item.name}
                icon={item.icon}
                label={item.label}
                labelAlignment="left"
                placeholder={item.placeholder}
                type={item.type}
                // error={errors[item.name]?.message}
                {...register(item.name, item.rules)}
                onChange={(e) => setValue(item.name, e.target.value)}
                // value={watch(item.name)}
              />
            ))}
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
