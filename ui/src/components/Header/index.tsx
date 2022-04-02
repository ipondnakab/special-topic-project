import React from "react";
import styled from "styled-components";
import { FlexCol, FlexRow } from "../common";

export type HeaderProps = {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  extraLeft?: React.ReactNode;
  extraRight?: React.ReactNode;
};
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: solid 2px #e6e6e6;
  & h2 {
    font-size: 24px;
  }
  & .subtitle {
    font-size: 12px;
    color: #8c8c8c;
  }
`;

const Header: React.FC<HeaderProps> = ({
  title,
  extraLeft,
  extraRight,
  subTitle,
}) => {
  return (
    <HeaderContainer>
      <FlexRow>
        {extraLeft}
        <FlexCol>
          {typeof title === "string" ? <h2>{title}</h2> : title}
          <span className="subtitle">{subTitle}</span>
        </FlexCol>
      </FlexRow>
      <div>{extraRight}</div>
    </HeaderContainer>
  );
};

export default Header;
