import styled from "styled-components";

export const InputForm = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  background: var(--gray-2);
  border: 1px solid var(--gray-2);
  color: var(--gray-0);
  padding-left: 10px;
  outline: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 48px;

  ::placeholder {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: var(--gray-1);
    padding-left: 5px;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .div-pass {
    position: relative;
  }
  .eyes {
    position: absolute;
    top: 17px;
    right: 10px;
    cursor: pointer;
    color: var(--gray-1);
  }
`;
