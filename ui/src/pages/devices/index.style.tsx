import styled from "styled-components";

export const TabsContainer = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const ContentContainer = styled.div`
  flex: 1;
  background-color: #fff;
  height: 100%;
  border-radius: 8px;
  padding: 16px;
`;
export const ContentTabContainer = styled.div`
  padding: 16px;
`;

export const DetailDeviceContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: #f2f2f2;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
  & > p {
    font-size: 16px;
  }
  & > svg {
    float: left;
    margin-right: 4px;
  }
`;

export const RelayContent = styled.div`
  display: flex;
  min-width: 460px;
  flex: 1;
  width: 100%;
  margin: 8px;
  padding: 16px 24px;
  border-radius: 4px;
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
      border-right: solid 1px #666;
      @media (max-width: 768px) {
        border-right: none;
      }
    }
  }
`;
