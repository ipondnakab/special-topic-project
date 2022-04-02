import React from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";
import { useNavigate } from "react-router-dom";
import { FcMultipleDevices, FcComboChart } from "react-icons/fc";
import styled from "styled-components";
const MockupIcon = styled.div`
  height: 42px;
  width: 80%;
  border-radius: 4px;
  margin: 8px auto;
  background-color: #0000006a;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
`;
const SideBar: React.FC = () => {
  const [selectedItem, setSelectItem] = React.useState("dashboard");
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
        icon={<FcComboChart size={80} />}
        name="dashboard"
        label="ภาพรวม"
      />
      <SidebarItem
        icon={<FcMultipleDevices size={80} />}
        name="devices"
        label="อุปกรณ์"
      />
    </Sidebar>
  );
};

export default SideBar;
