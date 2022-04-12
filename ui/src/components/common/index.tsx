import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const FG = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #777;
`;
export const DisableComponent: React.FC<{
  title: string;
}> = ({ title }) => <FG>{title}</FG>;
