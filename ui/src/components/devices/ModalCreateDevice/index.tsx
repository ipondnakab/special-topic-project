import React from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import { Button, Input, Modal, Spinner } from "react-rainbow-components";
import { ModalProps } from "react-rainbow-components/components/Modal";
import Header from "../../Header";
import { IoIosAdd } from "react-icons/io";
import { BiDevices, BiKey, BiWifi } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styled from "styled-components";
import { Device } from "../../../interfaces/devices";
import { useDevicesContext } from "../../../pages/devices/useDevices";
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

type DeviceForm = Pick<
  Device,
  "name" | "ipAddress" | "wifiName" | "wifiPassword"
>;

const inputs: {
  label: string;
  icon: JSX.Element;
  placeholder: string;
  name: keyof DeviceForm;
  rules: RegisterOptions;
  type?: "text" | "password";
}[] = [
  {
    label: "ชื่ออุปกรณ์",
    icon: <BiDevices />,
    placeholder: "ชื่ออุปกรณ์...",
    name: "name",
    rules: { required: "กรุณากรอกชื่ออุปกรณ์" },
  },
  {
    label: "IP Address",
    icon: <HiOutlineLocationMarker />,
    placeholder: "IP Address...",
    name: "ipAddress",
    rules: { required: "กรุณากรอก IP Address" },
  },
  {
    label: "ชื่อ Wifi",
    icon: <BiWifi />,
    placeholder: "ชื่อ Wifi...",
    name: "wifiName",
    rules: { required: "กรุณากรอกชื่อ Wifi" },
  },
  {
    label: "รหัส Wifi",
    icon: <BiKey />,
    placeholder: "รหัส Wifi",
    name: "wifiPassword",
    rules: { required: "กรุณากรอกรหัส Wifi" },
    type: "password",
  },
];

const ModalCreateDevice: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<DeviceForm>({
    defaultValues: {
      name: "",
      ipAddress: "",
      wifiName: "",
      wifiPassword: "",
    },
  });

  const { onCreateDevice } = useDevicesContext();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: DeviceForm) => {
    setIsLoading(true);
    try {
      await onCreateDevice(data);
      reset();
      onRequestClose && onRequestClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header extraLeft={<IoIosAdd size={28} />} title={"เพิ่มอุปกรณ์"} />
        <ContentInput>
          {inputs.map((item) => (
            <Input
              icon={item.icon}
              label={item.label}
              labelAlignment="left"
              placeholder={item.placeholder}
              type={item.type}
              error={errors[item.name]?.message}
              {...register(item.name, item.rules)}
              onChange={(e) => setValue(item.name, e.target.value)}
            />
          ))}
        </ContentInput>
        <Button
          type="submit"
          variant="success"
          style={{ margin: "0 auto", width: 240 }}
          disabled={isLoading}
        >
          <> {isLoading && <Spinner size="small" />}สร้าง</>
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalCreateDevice;
