import styled from "styled-components";

export const LoadingStyled = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 6px solid var(--gray-1);
  border-top-color: var(--color-primary);
  animation: is-rotating 1s infinite;
  justify-self: center;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
