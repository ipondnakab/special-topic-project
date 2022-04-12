import axios from "axios";
import { Schedule } from "../interfaces/schedule";

const pathUrl = "/schedules";

export const getSchedule = async () => {
  try {
    const response = await axios.get<Schedule[]>(pathUrl);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getScheduleByDeviceId = async (id: string) => {
  try {
    const response = await axios.get<Schedule[]>(`${pathUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const createSchedule = async (
  data: Pick<
    Schedule,
    "type" | "condition" | "value" | "period" | "activeRelay"
  >
) => {
  try {
    const response = await axios.post<Schedule>(pathUrl, data);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const updateSchedule = async (
  id: string,
  data: Partial<Schedule>
) => {
  try {
    const response = await axios.patch<Schedule>(`${pathUrl}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteSchedule = async (id: string) => {
  try {
    const response = await axios.delete(`${pathUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
