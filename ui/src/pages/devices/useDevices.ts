import React from "react";
import { createDevice, getDevices, updateDevice } from "../../apis/devices";
import { Device } from "../../interfaces/devices";

export const deviceContext = React.createContext<ReturnType<typeof useDevices>>(
  {} as ReturnType<typeof useDevices>
);

export const useDevicesContext = () => React.useContext(deviceContext);

function useDevices() {
  const [devices, setDevices] = React.useState<Device[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getAllDevices = React.useCallback(async () => {
    try {
      const response = await getDevices();
      if (!response) return;
      setDevices(response);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getAllDevices();
      setIsLoading(false);
    };
    fetchData();
  }, [getAllDevices]);

  const onCreateDevice = async (
    data: Pick<Device, "name" | "ipAddress" | "wifiName" | "wifiPassword">
  ) => {
    try {
      const res = await createDevice(data);
      if (res) setDevices((oldVal) => [...oldVal, res]);
    } catch (error) {
      console.log({ error });
    }
  };

  const onChangeStatusRelay = async (
    id: string,
    relay: "statusRelay1" | "statusRelay2" | "statusRelay3" | "statusRelay4",
    status: boolean
  ) => {
    try {
      const device = devices.find(
        (device) => device.id.toString() === id.toString()
      );
      if (!device) return;
      await updateDevice(id, { [relay]: status });
      // await setTimeout(() => {}, 1000);
      await getAllDevices();
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    devices,
    setDevices,
    onCreateDevice,
    setIsLoading,
    isLoading,
    onChangeStatusRelay,
  };
}

export default useDevices;
