import styled from "styled-components";

export const FormStyle = styled.form`
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  color: var(--gray-0);
  font-family: var(--font-family);
  border-radius: 5px;
`;
