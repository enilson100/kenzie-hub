import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
`;

export const Li = styled.li`
  background-color: var(--gray-4);
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: var(--gray-2);
  }
  .trash {
    color: var(--gray-0);
  }
  .trash:hover {
    color: var(--gray-3);
  }

  .div-list {
    display: flex;
    justify-content: space-between;
    width: 90%;

    p {
      font-family: var(--font-family);
      font-style: normal;
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;
      color: var(--gray-0);
    }
  }
`;
