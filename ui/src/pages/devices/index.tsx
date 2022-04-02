import React from "react";
import { Button, Spinner, Tab, Tabset } from "react-rainbow-components";
import Header from "../../components/Header";
import { IoIosAdd } from "react-icons/io";
import ModalCreateDevice from "../../components/devices/ModalCreateDevice";
import styled from "styled-components";
import useDevices, { deviceContext } from "./useDevices";

const TabsContainer = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const ContentContainer = styled.div`
  flex: 1;
  background-color: #fff;
  height: 100%;
  border-radius: 8px;
  padding: 16px;
`;
const Devices: React.FC = () => {
  const [showModalCreate, setShowModalCreate] = React.useState(false);
  const customHookDevices = useDevices();
  const { setTapSelect, tapSelect, devices, isLoading } = customHookDevices;
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
              onSelect={(_, tab) => {
                console.log({ tab });
                setTapSelect(tab);
              }}
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
                    <div key={item.id}>
                      <Header title={item.name} />
                      <p>{item.ipAddress}</p>
                      <p>{item.wifiName}</p>
                      <p>{item.wifiPassword}</p>
                    </div>
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
