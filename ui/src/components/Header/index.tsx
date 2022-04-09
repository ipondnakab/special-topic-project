import React from "react";
import styled from "styled-components";
import { FlexCol, FlexRow } from "../common";

export type HeaderProps = {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  extraLeft?: React.ReactNode;
  extraRight?: React.ReactNode;
  fontSize?: string;
  hideLine?: boolean;
};
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: ${({ hideLine }: { hideLine?: boolean }) =>
    hideLine ? "nune" : "solid 2px #e6e6e6"};
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
  fontSize,
  hideLine,
}) => {
  return (
    <HeaderContainer hideLine={hideLine}>
      <FlexRow>
        {extraLeft}
        <FlexCol>
          {typeof title === "string" ? (
            <h2 style={{ fontSize }}>{title}</h2>
          ) : (
            title
          )}
          <span className="subtitle">{subTitle}</span>
        </FlexCol>
      </FlexRow>
      <div>{extraRight}</div>
    </HeaderContainer>
  );
};

export default Header;
