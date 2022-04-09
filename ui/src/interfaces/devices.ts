export enum DeviceMode {
  AUTO = "AUTO",
  MANUAL = "MANUAL",
}

export type Device = {
  id: string;
  name: string;
  ipAddress: string;
  wifiName: string;
  wifiPassword: string;
  mode: DeviceMode;
  statusRelay1: boolean;
  statusRelay2: boolean;
  statusRelay3: boolean;
  statusRelay4: boolean;
  createAt: Date;
  updateAt: Date;
};
