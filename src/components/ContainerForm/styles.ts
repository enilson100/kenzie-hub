import styled from "styled-components";

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
