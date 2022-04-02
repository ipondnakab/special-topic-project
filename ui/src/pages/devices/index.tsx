import React from "react";
import {
  Button,
  CheckboxToggle,
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
import {
  ContentContainer,
  ContentTabContainer,
  DetailContent,
  DetailDeviceContainer,
  RelayContent,
  TabsContainer,
} from "./index.style";
import { Device } from "../../interfaces/devices";

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

const Devices: React.FC = () => {
  const [showModalCreate, setShowModalCreate] = React.useState(false);
  const [tapSelect, setTapSelect] = React.useState<string>();
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
  const { devices, isLoading, onChangeStatusRelay } = customHookDevices;

  React.useEffect(() => {
    if (devices.length > 0 && !tapSelect)
      setTapSelect(devices[0].id.toString());
    console.log("devices", devices[0]?.id.toString());

    // eslint-disable-next-line
  }, [devices]);

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
          <TabsContainer className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
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
                      <Header title={item.name} />
                      <ContentTabContainer>
                        <DetailDeviceContainer>
                          {detailList.map((detail) => (
                            <DetailContent key={detail.name}>
                              {detail.icon}
                              <p>{detail.label}</p>
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
          </TabsContainer>
        )}
      </>
    </deviceContext.Provider>
  );
};

export default Devices;
