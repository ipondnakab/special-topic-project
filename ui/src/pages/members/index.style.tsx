import { Avatar } from "react-rainbow-components";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContentTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
`;

export const CardMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 16px;
  padding-top: 16px;
  width: 286px;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  margin: 16px 0;
  box-shadow: none;
  transition: ease-in-out 0.2s;
  &:hover {
    transition: ease-in-out 0.2s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  & h1 {
    font-size: 22px;
  }
  & a {
    &:link {
      color: #8c8c8c;
      background-color: transparent;
    }
    font-size: 12px;
    color: #8c8c8c;
  }
`;

export const BottomCard = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;

export const CustomAvatar = styled(Avatar)`
  width: 250px;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 64px;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
`;
