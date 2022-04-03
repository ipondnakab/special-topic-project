import axios from "axios";
import { Transaction } from "../interfaces/transaction";

const pathUrl = "/transaction";

export const getAllByDevicesId = async (id: string) => {
  try {
    const response = await axios.get<Transaction[]>(`${pathUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getLatestByDevicesId = async (id: string) => {
  try {
    const response = await axios.get<Transaction>(`${pathUrl}/${id}/latest`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};