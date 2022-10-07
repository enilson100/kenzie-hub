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
    animation: rubberBand;
  }

  @media (min-width: 400px) {
    img {
      width: 140px;
      height: 25px;
    }
  }
`;
