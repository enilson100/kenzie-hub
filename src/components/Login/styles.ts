import styled from "styled-components";

export const DivForm = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--gray-4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  gap: 15px;
  p {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-1);
  }

  img {
    height: 22px;
  }

  @media (min-width: 400px) {
    img {
      width: 140px;
      height: 25px;
    }
  }
`;

export const ContainerForm = styled.div`
  background-color: var(--gray-3);
  width: 85%;
  max-width: 360px;
  padding: 25px 13px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  border-radius: 5px;

  .button-gray {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 48px;

    background: var(--gray-1);
    border: 2px solid var(--gray-1);
    color: var(--gray-0);
    text-decoration: none;
    font-family: var(--font-family);
    border-radius: 5px;
  }
`;
export const FormStyle = styled.form`
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  background: var(--gray-2);
  border: 1px solid var(--gray-2);
  color: var(--gray-0);
  padding-left: 10px;

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

export const Label = styled.label`
  color: var(--gray-0);
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
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

export const Title = styled.h1`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 22px;
  color: var(--gray-0);
`;
export const ErrorVali = styled.span`
  color: var(--color-error);
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;
