import styled from "styled-components";

export const AppStyled = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const FormHolder = styled.div`
  display: flex;
  flex-flow: column;
`;

export const FormLabel = styled.label`
  padding: 0.15rem;
`;

export const FormInput = styled.input`
  padding: 0.25rem;
  margin: 0.3rem;
  border-radius: 0.3rem;
`;

export const FormSelect = styled.select`
  padding: 0.25rem;
  margin: 0.3rem;
  border-radius: 0.3rem;
`;
