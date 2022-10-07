import styled from "styled-components";

export const DivButton = styled.div`
  display: flex;
  width: 90%;
  gap: 10px;
`;

export const ButtonDelete = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22px;

  width: 40%;
  height: 48px;
  background: var(--gray-1);

  border: 1.2182px solid var(--gray-1);
  border-radius: 4px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;
