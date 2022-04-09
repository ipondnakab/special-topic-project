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

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  font-size: 32px;
  color: #ddd;
  & * {
    opacity: 0.6;
  }
`;
