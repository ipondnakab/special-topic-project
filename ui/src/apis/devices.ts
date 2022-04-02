import axios from "axios";
import { Device } from "../interfaces/devices";

const pathUrl = "/devices";

export const getDevices = async () => {
  try {
    const response = await axios.get<Device[]>(pathUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDeviceById = async (id: string) => {
  try {
    const response = await axios.get<Device>(`${pathUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDevice = async (id: string, data: Partial<Device>) => {
  try {
    const response = await axios.patch<Device>(`${pathUrl}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createDevice = async (
  data: Pick<Device, "name" | "ipAddress" | "wifiName" | "wifiPassword">
) => {
  try {
    const response = await axios.post<Device>(pathUrl, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
