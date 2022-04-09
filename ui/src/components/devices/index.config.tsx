import { BiKey, BiWifi } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherWindyCloudy,
} from "react-icons/ti";
import { Device } from "../../interfaces/devices";
import { CardSensorPropsType } from "./CardSensor";

export const transactionList: Omit<CardSensorPropsType, "latestTransaction">[] =
  [
    {
      icon: <TiWeatherPartlySunny size={32} />,
      label: "อุณหภูมิ",
      name: "temperature",
      unit: "°C",
      bg: "linear-gradient(160deg, #FBAB7E 0%, #F7CE68 100%)",
      chartColors: "#FBAB7E",
    },
    {
      icon: <TiWeatherShower size={32} />,
      label: "ความชื้น",
      name: "moisture",
      unit: "%",
      bg: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      chartColors: "#0093E9",
    },
    {
      icon: <TiWeatherDownpour size={32} />,
      label: "ความชื้นดิน",
      name: "soilMoisture",
      unit: "%",
      bg: "linear-gradient(160deg, #2ec0a2 0%,#fde47e 100%)",
      chartColors: "#2ec0a2",
    },
    {
      icon: <TiWeatherWindyCloudy size={32} />,
      label: "ความเร็วลม",
      name: "windSpeed",
      unit: "m/s",
      bg: "linear-gradient(160deg, #D9AFD9 0%, #97D9E1 100%)",
      chartColors: "#D9AFD9",
    },
  ];

export const detailList: {
  icon: React.ReactNode;
  label: string;
  name: keyof Pick<Device, "wifiName" | "wifiPassword" | "ipAddress">;
}[] = [
  {
    icon: <HiOutlineLocationMarker size={22} />,
    label: "IP Address",
    name: "ipAddress",
  },
  {
    icon: <BiWifi size={22} />,
    label: "ชื่อ Wifi",
    name: "wifiName",
  },
  {
    icon: <BiKey size={22} />,
    label: "รหัส Wifi",
    name: "wifiPassword",
  },
];
