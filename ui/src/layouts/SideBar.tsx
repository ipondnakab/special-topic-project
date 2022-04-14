import React from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";
import { useNavigate } from "react-router-dom";
import { FcMultipleDevices, FcConferenceCall, FcReading } from "react-icons/fc";
import styled from "styled-components";
import logoSmartFarm from "../logo/logo.png";

const MockupIcon = styled.div`
  height: 60px;
  width: 80%;
  border-radius: 4px;
  margin: 8px auto;
  // background-color: #f0f0f0;
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
      <MockupIcon>
        <img src={logoSmartFarm} alt="smart-farm-logo" />
      </MockupIcon>
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
