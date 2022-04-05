import React, { ReactElement, useEffect, useMemo } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import { Button, Input, Modal, Spinner } from "react-rainbow-components";
import Header from "../../Header";
import { BiDevices, BiKey, BiWifi } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styled from "styled-components";
import { Device } from "../../../interfaces/devices";
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
  "id" | "name" | "ipAddress" | "wifiName" | "wifiPassword"
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

export type ModalPropsType = {
  isOpen?: boolean;
  onRequestClose?: () => void;
  actionSubmit: (data: Pick<Device, any>) => Promise<void>;
  value?: DeviceForm;
  titleModal: string;
  iconModal: ReactElement<any, any>;
};

const ModalCreateDevice: React.FC<ModalPropsType> = ({
  isOpen,
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
  } = useForm<DeviceForm>({
    defaultValues: useMemo(() => {
      return value;
    }, [value]),
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: DeviceForm) => {
    setIsLoading(true);
    try {
      if (value?.id) {
        data.id = value.id;
      }
      await actionSubmit(data);
      reset();
      onRequestClose && onRequestClose();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    reset(value);
  }, [reset, value]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header extraLeft={iconModal} title={titleModal} />
        <ContentInput>
          {inputs.map((item) => (
            <Input
              key={item.name}
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
          <> {isLoading && <Spinner size="small" />}บันทึก</>
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalCreateDevice;
