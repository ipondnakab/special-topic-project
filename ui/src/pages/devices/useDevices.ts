import React from "react";
import { createDevice, getDevices } from "../../apis/devices";
import { Device } from "../../interfaces/devices";

export const deviceContext = React.createContext<ReturnType<typeof useDevices>>(
  {} as ReturnType<typeof useDevices>
);

export const useDevicesContext = () => React.useContext(deviceContext);

function useDevices() {
  const [devices, setDevices] = React.useState<Device[]>([]);
  const [tapSelect, setTapSelect] = React.useState<string>();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getDevices();
      if (!response) return;
      setTapSelect(response[0].id.toString() || "");
      setDevices(response);
    };
    fetchData();
  }, []);

  const onCreateDevice = async (
    data: Pick<Device, "name" | "ipAddress" | "wifiName" | "wifiPassword">
  ) => {
    try {
      const res = await createDevice(data);
      if (res) setDevices((oldVal) => [...oldVal, res]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    devices,
    tapSelect,
    setTapSelect,
    setDevices,
    onCreateDevice,
  };
}

export default useDevices;
