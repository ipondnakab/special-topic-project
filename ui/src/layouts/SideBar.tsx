import React from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";
import { useNavigate } from "react-router-dom";
import { FcMultipleDevices, FcConferenceCall, FcReading } from "react-icons/fc";
import styled from "styled-components";
// import logoSmartFarm from "../logo/logoSmartFarm.png";

const MockupIcon = styled.div`
  height: 60px;
  width: 80%;
  border-radius: 4px;
  margin: 8px auto;
  background-color: #e1ece2;
  display: flex;
  color: #555;
  justify-content: center;
  align-items: center;
`;
const SideBar: React.FC = () => {
  const pathName = window.location.pathname.slice(1);
  const [selectedItem, setSelectItem] = React.useState(pathName || "devices");
  const navigate = useNavigate();
  React.useEffect(
    () => navigate("/" + selectedItem),
    // eslint-disable-next-line
    [selectedItem]
  );
  return (
    <Sidebar
      selectedItem={selectedItem}
      onSelect={(_, page) => setSelectItem(page)}
      id="sidebar-1"
    >
      <MockupIcon>ICON</MockupIcon>
      <SidebarItem
        icon={<FcMultipleDevices size={80} />}
        name="devices"
        label="อุปกรณ์"
      />
      <SidebarItem
        icon={<FcConferenceCall size={80} />}
        name="members"
        label="สมาชิก"
      />
      <SidebarItem
        icon={<FcReading size={80} />}
        name="manuals"
        label="คู่มือการใช้งาน"
      />
    </Sidebar>
  );
};

export default SideBar;
