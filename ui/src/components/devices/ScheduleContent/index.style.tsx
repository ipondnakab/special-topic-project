import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
`;

export const CardSchedule = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  margin: 8px;
  padding-left: 48px;
  position: relative;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 48px;
  /* background-color: ${({ isWeekly }: { isWeekly?: boolean }) =>
    isWeekly ? "#f99" : "#99f"}; */

  background-image: ${({ isWeekly }: { isWeekly?: boolean }) =>
    isWeekly
      ? "radial-gradient( circle farthest-corner at 10% 20%,  #87c7a4 0%, #5bd4d6 90% )"
      : "radial-gradient( circle farthest-corner at 10.2% 55.8%,  #f0a8bd 0%, #f588c2 46.2%, #f199ed 90.1% )"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  & svg {
      margin-bottom: 16px;
  }
  & span {
    padding: 0 8px;
    transform: rotate(-90deg);
  }
`;

export const Label = styled.span`
  padding: 0px 16px;
  color: #888;
`;
