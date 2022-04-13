import React from "react";
import { Button, Spinner, Tab, Tabset } from "react-rainbow-components";
import Header from "../../components/Header";
import { IoIosAdd } from "react-icons/io";
import ModalDevice from "../../components/devices/ModalDevice";
import ModalSchedule from "../../components/devices/ModalSchedule";
import useDevices, { deviceContext } from "./useDevices";
import { FaPencilAlt } from "react-icons/fa";
import { ContentContainer, EmptyContainer, TabsContainer } from "./index.style";
import { Device } from "../../interfaces/devices";
import { FcBrokenLink } from "react-icons/fc";
import DeviceContent from "../../components/devices/DeviceContent";
import { Schedule } from "../../interfaces/schedule";
import useSchedule, { scheduleContext } from "./useSchedule";

const Devices: React.FC = () => {
  const [showModalCreate, setShowModalCreate] = React.useState(false);
  const [showModalEdit, setShowModalEdit] = React.useState(false);
  const [showModalCreateSchedule, setShowModalCreateSchedule] =
    React.useState(false);
  const [showModalEditSchedule, setShowModalEditSchedule] =
    React.useState(false);
  const [currentEditDevice, setCurrentEditDevice] = React.useState<Device>();
  const [currentEditSchedule, setCurrentEditSchedule] =
    React.useState<Schedule>();
  const [tapSelect, setTapSelect] = React.useState<string>();

  const customHookDevices = useDevices();
  const { devices, isLoading, onCreateDevice, onEditDevice } =
    customHookDevices;
  const customHookSchedule = useSchedule();
  const { onCreateSchedule, onEditSchedule } = customHookSchedule;

  React.useEffect(() => {
    if (devices.length > 0 && !tapSelect)
      setTapSelect(devices[0].id.toString());
  }, [devices, tapSelect]);

  const openEditModal = (data: Device) => {
    setCurrentEditDevice(data);
    setShowModalEdit(true);
  };

  const openEditModalSchedule = (data: Schedule) => {
    setCurrentEditSchedule(data);
    setShowModalEditSchedule(true);
  };

  return (
    <deviceContext.Provider value={customHookDevices}>
      <scheduleContext.Provider value={customHookSchedule}>
      <>
        <ModalDevice
          isOpen={showModalCreate}
          onRequestClose={() => setShowModalCreate(false)}
          actionSubmit={onCreateDevice}
          titleModal="เพิ่มอุปกรณ์"
          iconModal={<IoIosAdd size={28} />}
        />
        <ModalDevice
          isOpen={showModalEdit}
          onRequestClose={() => setShowModalEdit(false)}
          actionSubmit={onEditDevice}
          value={currentEditDevice}
          titleModal="แก้ไขข้อมูลอุปกรณ์"
          iconModal={<FaPencilAlt size={24} />}
        />
        <ModalSchedule
          isOpen={showModalCreateSchedule}
          onRequestClose={() => setShowModalCreateSchedule(false)}
          actionSubmit={onCreateSchedule}
          deviceId={Number(tapSelect)}
          titleModal={`เพิ่มการทำงานอัตโนมัติของอุปกรณ์ ${tapSelect}`}
          iconModal={<IoIosAdd size={28} />}
        />
        {currentEditSchedule && (
          <ModalSchedule
            isOpen={showModalEditSchedule}
            onRequestClose={() => setShowModalEditSchedule(false)}
            actionSubmit={onEditSchedule}
            deviceId={Number(tapSelect)}
            value={{
              ...currentEditSchedule,
              activeRelay: currentEditSchedule.activeRelay
                .toString()
                .split(/[, ]+/),
            }}
            titleModal={`แก้ไขการทำงานอัตโนมัติของอุปกรณ์ ${tapSelect}`}
            iconModal={<FaPencilAlt size={24} />}
          />
        )}
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
                  {devices.map((device) => (
                    <Tab
                      key={device.id}
                      label={device.name}
                      name={device.id.toString()}
                      id="primary"
                      ariaControls="primaryTab"
                    />
                  ))}
                </Tabset>
                <ContentContainer>
                  {devices.map(
                    (device) =>
                      device.id.toString() === tapSelect && (
                        <DeviceContent
                          key={device.id + device.name}
                          device={device}
                          openEditModal={openEditModal}
                          tapSelect={tapSelect}
                          setModalCreateSchedule={setShowModalCreateSchedule}
                          openEditModalSchedule={openEditModalSchedule}
                        />
                      )
                  )}
                </ContentContainer>
              </>
            )}
          </TabsContainer>
        )}
      </>
      </scheduleContext.Provider>
    </deviceContext.Provider>
  );
};

export default Devices;
