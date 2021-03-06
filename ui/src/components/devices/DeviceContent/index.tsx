import dayjs from "dayjs";
import React from "react";
import { CheckboxToggle, LoadingShape } from "react-rainbow-components";
import {
  getAllByDevicesId,
  getLatestByDevicesId,
} from "../../../apis/transactions";
import { Device, DeviceMode } from "../../../interfaces/devices";
import { Transaction } from "../../../interfaces/transaction";
import { useDevicesContext } from "../../../pages/devices/useDevices";
import { DisableComponent, FlexCol } from "../../common";
import Header from "../../Header";
import ButtonControlDevice from "../ButtonControlDevice";
import CardSensor from "../CardSensor";
import { detailList, transactionList } from "../index.config";
import {
  BottomContainer,
  BottomSectionContainer,
  ContentTabContainer,
  DetailContent,
  DetailDeviceContainer,
  LabelIcon,
  RelayContent,
  TransactionContainer,
} from "./index.style";
import "dayjs/locale/th"; // import locale
import ChartReport from "../ChartReport";
import ScheduleContent from "../ScheduleContent";
import { Schedule } from "../../../interfaces/schedule";

export type DeviceContentPropsType = {
  device: Device;
  openEditModal: (device: Device) => void;
  openEditModalSchedule: (schedule: Schedule) => void;
  tapSelect: string;
  setModalCreateSchedule: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeviceContent: React.FC<DeviceContentPropsType> = ({
  device,
  openEditModal,
  openEditModalSchedule,
  tapSelect,
  setModalCreateSchedule
}) => {
  const { onChangeStatusRelay } = useDevicesContext();
  const [loadingRelay1, setLoadingRelay1] = React.useState(false);
  const [loadingRelay3, setLoadingRelay3] = React.useState(false);
  const [loadingRelay2, setLoadingRelay2] = React.useState(false);
  const [loadingRelay4, setLoadingRelay4] = React.useState(false);
  const [latestTransaction, setLatestTransaction] = React.useState<
    Transaction | undefined | "loading"
  >();
  const [allTransaction, setAllTransaction] = React.useState<
    Transaction[] | undefined | "loading"
  >();
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

  React.useEffect(() => {
    const fetch = async () => {
      setAllTransaction("loading");
      try {
        if (!tapSelect) return;
        const res = await getAllByDevicesId(tapSelect);
        if (!res) return setAllTransaction(undefined);
        setAllTransaction(res);
      } catch (error) {
        setAllTransaction(undefined);
        console.log({ error });
      }
    };
    fetch();
  }, [tapSelect]);

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
        label: "?????????????????? 1",
        state: loadingRelay1,
        setState: setLoadingRelay1,
      },
      {
        name: "statusRelay2",
        label: "?????????????????? 2",
        state: loadingRelay2,
        setState: setLoadingRelay2,
      },
      {
        name: "statusRelay3",
        label: "?????????????????? 3",
        state: loadingRelay3,
        setState: setLoadingRelay3,
      },
      {
        name: "statusRelay4",
        label: "?????????????????? 4",
        state: loadingRelay4,
        setState: setLoadingRelay4,
      },
    ],
    [loadingRelay1, loadingRelay2, loadingRelay3, loadingRelay4]
  );

  return (
    <FlexCol key={device.id}>
      <Header
        title={device.name}
        extraRight={
          <ButtonControlDevice device={device} openEditModal={openEditModal} />
        }
        subTitle={
          latestTransaction === "loading" ? (
            <LoadingShape
              shape={"rounded-rect"}
              variant={"solid"}
              style={{
                margin: 4,
                width: "30%",
              }}
            />
          ) : latestTransaction ? (
            `??????????????????????????????????????????????????? ${dayjs(
              latestTransaction.timestamp || latestTransaction.createAt
            )
              .locale("th")
              .format("HH:mm???. DD MMM YYYY")}`
          ) : (
            "??????????????????????????????????????????"
          )
        }
      />
      <ContentTabContainer>
        <TransactionContainer>
          {transactionList.map((transaction, index) => (
            <CardSensor
              key={transaction.name+index}
              {...transaction}
              latestTransaction={latestTransaction}
            />
          ))}
        </TransactionContainer>
        <DetailDeviceContainer>
          {detailList.map((detail, index) => (
            <DetailContent key={detail.name+index}>
              <LabelIcon>
                {detail.icon}
                <p>{detail.label}</p>
              </LabelIcon>
              <h1>{device[detail.name] || "-"}</h1>
            </DetailContent>
          ))}

          <RelayContent>
            {device.mode === DeviceMode.AUTO && (
              <DisableComponent title={"???????????????????????????????????? Manual"} />
            )}
            {relayList.map((relay, index) => (
              <CheckboxToggle
                key={relay.name+index}
                label={relay.label}
                labelAlignment="top"
                disabled={relay.state}
                style={{
                  cursor: relay.state ? "wait" : undefined,
                }}
                value={device[relay.name]}
                onChange={async (e) => {
                  relay.setState(true);
                  await onChangeStatusRelay(
                    device.id,
                    relay.name,
                    e.target.checked
                  );
                  relay.setState(false);
                }}
              />
            ))}
          </RelayContent>
        </DetailDeviceContainer>
        <BottomContainer>
          <BottomSectionContainer style={{ flex: 0.5, minWidth: 380 }}>
            {device.mode === DeviceMode.MANUAL && (
              <DisableComponent title={"???????????????????????????????????? Auto"} />
            )}
            <ScheduleContent device={device} setModalCreate={setModalCreateSchedule} openEditModalSchedule={openEditModalSchedule} />
          </BottomSectionContainer>

          <BottomSectionContainer>
            <ChartReport allTransaction={allTransaction} key={0} />
          </BottomSectionContainer>
        </BottomContainer>
      </ContentTabContainer>
    </FlexCol>
  );
};

export default DeviceContent;
