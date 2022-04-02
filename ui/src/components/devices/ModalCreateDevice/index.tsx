import React from "react";
import { useForm } from "react-hook-form";
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
    <Modal id="modal-1" isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header extraLeft={<IoIosAdd size={28} />} title={"เพิ่มอุปกรณ์"} />
        <ContentInput>
          <Input
            icon={<BiDevices />}
            label="ชื่ออุปกรณ์"
            labelAlignment="left"
            placeholder="ชื่ออุปกรณ์"
            error={errors["name"]?.message}
            {...register("name", { required: "กรุณากรอกชื่ออุปกรณ์" })}
            onChange={(e) => setValue("name", e.target.value)}
          />
          <Input
            icon={<HiOutlineLocationMarker />}
            label="IP Address"
            labelAlignment="left"
            placeholder="IP Address"
            error={errors["ipAddress"]?.message}
            {...register("ipAddress", { required: "กรุณากรอก IP Address" })}
            onChange={(e) => setValue("ipAddress", e.target.value)}
          />
          <Input
            icon={<BiWifi />}
            label="ชื่อ Wifi"
            labelAlignment="left"
            placeholder="ชื่อ Wifi"
            error={errors["wifiName"]?.message}
            {...register("wifiName", { required: "กรุณากรอกชื่อ Wifi" })}
            onChange={(e) => setValue("wifiName", e.target.value)}
          />
          <Input
            icon={<BiKey />}
            label="รหัส Wifi"
            labelAlignment="left"
            placeholder="รหัส Wifi"
            type="password"
            error={errors["wifiPassword"]?.message}
            {...register("wifiPassword", { required: "กรุณากรอกรหัส Wifi" })}
            onChange={(e) => setValue("wifiPassword", e.target.value)}
          />
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
