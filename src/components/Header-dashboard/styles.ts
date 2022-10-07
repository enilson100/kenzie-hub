import styled from "styled-components";

export const HeaderDash = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100vw;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    @media (min-width: 450px) {
      width: 70%;
    }
  }
  img {
    height: 25px;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;

    width: 55.49px;
    height: 32px;
    background: var(--gray-3);
    border-radius: 4px;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    text-align: center;

    color: var(--gray-0);
  }
`;

export const Hr = styled.hr`
  background-color: var(--gray-3);
  height: 1px;
`;
