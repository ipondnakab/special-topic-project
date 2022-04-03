import React from "react";
import {
  Button,
  ButtonIcon,
  CheckboxToggle,
  LoadingShape,
  Spinner,
  Tab,
  Tabset,
} from "react-rainbow-components";
import Header from "../../components/Header";
import { IoIosAdd } from "react-icons/io";
import ModalCreateDevice from "../../components/devices/ModalCreateDevice";
import useDevices, { deviceContext } from "./useDevices";
import { FlexCol } from "../../components/common";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiKey, BiWifi } from "react-icons/bi";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherWindyCloudy,
} from "react-icons/ti";
import {
  CardTransaction,
  ContentContainer,
  ContentTabContainer,
  DetailContent,
  DetailDeviceContainer,
  EmptyContainer,
  LabelIcon,
  RelayContent,
  TabsContainer,
  TransactionContainer,
} from "./index.style";
import { Device } from "../../interfaces/devices";
import { Transaction } from "../../interfaces/transaction";
import { getLatestByDevicesId } from "../../apis/transactions";
import dayjs from "dayjs";
import "dayjs/locale/th"; // import locale
import { FcBrokenLink } from "react-icons/fc";

const detailList: {
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

const transactionList: {
  icon: React.ReactNode;
  label: string;
  name: keyof Pick<
    Transaction,
    "temperature" | "moisture" | "soilMoisture" | "windSpeed"
  >;
  unit: string;
  bg: string;
}[] = [
  {
    icon: <TiWeatherPartlySunny size={32} />,
    label: "อุณหภูมิ",
    name: "temperature",
    unit: "°C",
    bg: "linear-gradient(160deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  {
    icon: <TiWeatherShower size={32} />,
    label: "ความชื้น",
    name: "moisture",
    unit: "%",
    bg: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
  {
    icon: <TiWeatherDownpour size={32} />,
    label: "ความชื้นดิน",
    name: "soilMoisture",
    unit: "%",
    bg: "linear-gradient(160deg, #2ec0a2 0%,#fde47e 100%)",
  },
  {
    icon: <TiWeatherWindyCloudy size={32} />,
    label: "ความเร็วลม",
    name: "windSpeed",
    unit: "m/s",
    bg: "linear-gradient(160deg, #D9AFD9 0%, #97D9E1 100%)",
  },
];

const Devices: React.FC = () => {
  const [showModalCreate, setShowModalCreate] = React.useState(false);
  const [tapSelect, setTapSelect] = React.useState<string>();
  const [latestTransaction, setLatestTransaction] = React.useState<
    Transaction | undefined | "loading"
  >();
  const [loadingRelay1, setLoadingRelay1] = React.useState(false);
  const [loadingRelay3, setLoadingRelay3] = React.useState(false);
  const [loadingRelay2, setLoadingRelay2] = React.useState(false);
  const [loadingRelay4, setLoadingRelay4] = React.useState(false);

  const relayList: {
    label: string;
    name: keyof Pick<
      Device,
      "statusRelay1" | "statusRelay2" | "statusRelay3" | "statusRelay4"
    >;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  }[] = React.useMemo(
    () => [
      {
        name: "statusRelay1",
        label: "สวิตซ์ 1",
        state: loadingRelay1,
        setState: setLoadingRelay1,
      },
      {
        name: "statusRelay2",
        label: "สวิตซ์ 2",
        state: loadingRelay2,
        setState: setLoadingRelay2,
      },
      {
        name: "statusRelay3",
        label: "สวิตซ์ 3",
        state: loadingRelay3,
        setState: setLoadingRelay3,
      },
      {
        name: "statusRelay4",
        label: "สวิตซ์ 4",
        state: loadingRelay4,
        setState: setLoadingRelay4,
      },
    ],
    [loadingRelay1, loadingRelay2, loadingRelay3, loadingRelay4]
  );

  const customHookDevices = useDevices();
  const { devices, isLoading, onChangeStatusRelay, onDeleteDevice } =
    customHookDevices;

  React.useEffect(() => {
    if (devices.length > 0 && !tapSelect)
      setTapSelect(devices[0].id.toString());
  }, [devices, tapSelect]);

  React.useEffect(() => {
    const fetch = async () => {
      setLatestTransaction("loading");
      try {
        if (!tapSelect) return;
        const res = await getLatestByDevicesId(tapSelect);
        if (!res) return setLatestTransaction(undefined);
        setLatestTransaction(res);
      } catch (error) {
        setLatestTransaction(undefined);
        console.log({ error });
      }
    };
    fetch();
  }, [tapSelect]);

  return (
    <deviceContext.Provider value={customHookDevices}>
      <>
        <ModalCreateDevice
          isOpen={showModalCreate}
          onRequestClose={() => setShowModalCreate(false)}
        />
        <Header
          title={"อุปกรณ์"}
          extraRight={
            <Button size="small" onClick={() => setShowModalCreate(true)}>
              <>
                <IoIosAdd style={{ marginRight: 8 }} />
                เพิ่มอุปกรณ์
              </>
            </Button>
          }
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <TabsContainer>
            {devices.length === 0 ? (
              <EmptyContainer>
                <FcBrokenLink size={128} />
                คุณยังไม่มีอุปกรณ์
              </EmptyContainer>
            ) : (
              <>
                <Tabset
                  onSelect={(_, tab) => setTapSelect(tab)}
                  activeTabName={tapSelect}
                >
                  {devices.map((item) => (
                    <Tab
                      key={item.id}
                      label={item.name}
                      name={item.id.toString()}
                      id="primary"
                      ariaControls="primaryTab"
                    />
                  ))}
                </Tabset>
                <ContentContainer>
                  {devices.map(
                    (item) =>
                      item.id.toString() === tapSelect && (
                        <FlexCol key={item.id}>
                          <Header
                            title={item.name}
                            extraRight={
                              <div className="rainbow-p-right_large">
                                <ButtonIcon
                                  variant="base"
                                  size="medium"
                                  tooltip="แก้ไข"
                                  icon={<FaPencilAlt />}
                                />
                                <ButtonIcon
                                  variant="base"
                                  size="medium"
                                  tooltip="ลบ"
                                  icon={<FaTrashAlt />}
                                  onClick={() => onDeleteDevice(item.id)}
                                />
                              </div>
                            }
                            subTitle={
                              latestTransaction === "loading" ? (
                                <LoadingShape
                                  shape={"rounded-rect"}
                                  variant={"solid"}
                                  style={{ margin: 4, width: "30%" }}
                                />
                              ) : latestTransaction ? (
                                `ข้อมูลล่าสุดเมื่อ ${dayjs(
                                  latestTransaction.timestamp ||
                                    latestTransaction.createAt
                                )
                                  .locale("th")
                                  .format("HH:mm น. DD MMM YYYY")}`
                              ) : (
                                "ยังไม่มีข้อมูล"
                              )
                            }
                          />
                          <ContentTabContainer>
                            <TransactionContainer>
                              {transactionList.map(
                                ({ icon, label, name, unit, bg }) => (
                                  <CardTransaction
                                    key={name}
                                    style={{ backgroundImage: bg }}
                                  >
                                    <LabelIcon
                                      style={{ alignItems: "flex-end" }}
                                    >
                                      {icon}
                                      <p>{label}</p>
                                    </LabelIcon>
                                    <h1>
                                      {latestTransaction === "loading" ? (
                                        <div
                                          className="rainbow-m-vertical_medium"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                        >
                                          <LoadingShape
                                            shape={"rounded-rect"}
                                            variant={"solid"}
                                            style={{ margin: 4, width: "30%" }}
                                          />
                                        </div>
                                      ) : latestTransaction ? (
                                        `${latestTransaction[name]} ${unit}`
                                      ) : (
                                        "-"
                                      )}
                                    </h1>
                                  </CardTransaction>
                                )
                              )}
                            </TransactionContainer>
                            <DetailDeviceContainer>
                              {detailList.map((detail) => (
                                <DetailContent key={detail.name}>
                                  <LabelIcon>
                                    {detail.icon}
                                    <p>{detail.label}</p>
                                  </LabelIcon>
                                  <h1>{item[detail.name] || "-"}</h1>
                                </DetailContent>
                              ))}
                              <RelayContent>
                                {relayList.map((relay) => (
                                  <CheckboxToggle
                                    key={relay.name}
                                    label={relay.label}
                                    labelAlignment="top"
                                    disabled={relay.state}
                                    style={{
                                      cursor: relay.state ? "wait" : undefined,
                                    }}
                                    value={item[relay.name]}
                                    onChange={async (e) => {
                                      relay.setState(true);
                                      await onChangeStatusRelay(
                                        item.id,
                                        relay.name,
                                        e.target.checked
                                      );
                                      relay.setState(false);
                                    }}
                                  />
                                ))}
                              </RelayContent>
                            </DetailDeviceContainer>
                          </ContentTabContainer>
                        </FlexCol>
                      )
                  )}
                </ContentContainer>
              </>
            )}
          </TabsContainer>
        )}
      </>
    </deviceContext.Provider>
  );
};

export default Devices;
