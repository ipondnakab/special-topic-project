import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {
  ButtonGroupPicker,
  ButtonIcon,
  ButtonOption,
} from "react-rainbow-components";
import { Device, DeviceMode } from "../../../interfaces/devices";
import { useDevicesContext } from "../../../pages/devices/useDevices";
import { Label } from "../ScheduleContent/index.style";

export type ButtonControlDeviceType = {
  device: Device;
  openEditModal: (device: Device) => void;
};

const ButtonControlDevice: React.FC<ButtonControlDeviceType> = ({
  device,
  openEditModal,
}) => {
  const { onEditDevice, onDeleteDevice } = useDevicesContext();
  return (
    <div
      className="rainbow-p-right_large"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Label>Mode: </Label>
      <ButtonGroupPicker
        style={{ marginRight: "16px" }}
        value={device.mode}
        onChange={async (value) => {
          console.log({ value });
          const mode = DeviceMode[value as DeviceMode];
          if (!mode) return;
          await onEditDevice({
            id: device.id,
            mode,
          });
        }}
        size="small"
      >
        <ButtonOption label="Auto" name={DeviceMode.AUTO} />
        <ButtonOption label="Manual" name={DeviceMode.MANUAL} />
      </ButtonGroupPicker>
      <ButtonIcon
        variant="base"
        size="medium"
        tooltip="แก้ไข"
        onClick={() => openEditModal(device)}
        icon={<FaPencilAlt />}
      />
      <ButtonIcon
        variant="base"
        size="medium"
        tooltip="ลบ"
        icon={<FaTrashAlt />}
        onClick={() => onDeleteDevice(device.id)}
      />
    </div>
  );
};

export default ButtonControlDevice;
