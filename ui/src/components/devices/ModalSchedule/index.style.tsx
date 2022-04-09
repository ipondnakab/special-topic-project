import styled from "styled-components";

export const ContentInput = styled.div`
  padding: 1.5rem 1rem;
  & > div {
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  .time-picker label {
    margin-left: 2rem;
    width: 100%;
  }
`;
