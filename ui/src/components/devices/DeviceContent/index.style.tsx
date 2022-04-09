import styled from "styled-components";

export const ContentTabContainer = styled.div`
  padding: 16px;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

export const DetailDeviceContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: #f2f2f2;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 8px;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: auto;
  }
`;

export const DetailContent = styled.div`
  padding: 16px;
  color: #8c8c8c;
  min-width: 180px;
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0px;
  }
  & > h1 {
    font-size: 20px;
    color: #333;
    margin-top: 8px;
    margin-left: 8px;
  }
`;

export const RelayContent = styled.div`
  display: flex;
  min-width: 460px;
  flex: 1;
  width: 100%;
  margin: 4px 8px;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: #fff;
  justify-content: space-between;

  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 180px;
    margin: 0px;
  }
  & > label {
    padding: 8px 16px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      border-right: solid 4px #f2f2f2;
      @media (max-width: 768px) {
        border-right: none;
      }
    }
  }
`;

export const LabelIcon = styled.div`
  display: flex;
  flex-direction: row;
  & > svg {
    float: left;
    margin-right: 4px;
  }
  & > p {
    font-size: 16px;
  }
`;

export const BottomSectionContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  flex: 1;
  flex-wrap: wrap;
  margin: 16px 8px;
  max-height: 500px;
`;

export const BottomContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
