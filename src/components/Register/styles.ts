import styled from "styled-components";

export const DivCadastro = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .header-cadastro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 385px;
    margin: 15px 0px;
  }
  .button-back {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 16px;
    gap: 10px;
    text-decoration: none;
    color: var(--gray-0);
    background-color: var(--gray-3);
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    border-radius: 3px;
  }

  .title-cadastro {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .span {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray-1);
  }

  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: var(--gray-2);
    border: 1px solid var(--gray-2);
    border-radius: 4px;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: var(--gray-1);
  }
`;

export const ButtonCadastrar = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  background: var(--color-primary-Disable);
  border: 2px solid var(--color-primary-Disable);
  color: #ffffff;
  text-decoration: none;
  font-family: var(--font-family);
  border-radius: 5px;
`;
