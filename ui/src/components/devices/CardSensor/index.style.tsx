import styled from "styled-components";

export const CardTransaction = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 200px;
  padding: 18px 32px;
  border-radius: 8px;
  margin: 0 8px;
  margin-bottom: 8px;
  color: #fff;
  min-height: 120px;

  & > h1 {
    font-size: 32px;
    color: #fff;
    text-align: right;
    min-height: 32px;
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