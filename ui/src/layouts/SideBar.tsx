import React from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";
import { useNavigate } from "react-router-dom";
import { FcMultipleDevices } from "react-icons/fc";
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
  const [selectedItem, setSelectItem] = React.useState(pathName || "dashboard");
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
        ICON
        {/* <img src={"https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.15752-9/277725219_276116334731441_2870766328895467269_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeF7Zgc-3PccZPi4KUYXdbIqZxhNjc378I9nGE2Nzfvwj1ohnU2Q6DHcx-L9ElSwxqoaUgocARmLUEvC8Olj9lnT&_nc_ohc=Ry054Vx29iAAX__KGVk&_nc_ht=scontent.fkkc3-1.fna&oh=03_AVIgSg1QJhqFcxhWmEvgKoWvJ2es6EuEKh09wAFP8YRxLg&oe=6278BB1E"} alt="logoSmartFarm" width="60%" height="60%" /> */}
      </MockupIcon>
      {/* <SidebarItem
        icon={<FcComboChart size={80} />}
        name="dashboard"
        label="ภาพรวม"
      /> */}
      <SidebarItem
        icon={<FcMultipleDevices size={80} />}
        name="devices"
        label="อุปกรณ์"
      />
    </Sidebar>
  );
};

export default SideBar;
