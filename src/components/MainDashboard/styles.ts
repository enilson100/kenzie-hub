import styled from "styled-components";

export const Main = styled.main`
  .subHeader {
    margin: auto;
    height: 120px;
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: center;
    @media (min-width: 450px) {
      width: 70%;
    }
    h1 {
      font-family: var(--font-family);
      color: var(--gray-0);
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;

      width: 100%;

      @media (min-width: 450px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .body-main {
    margin: auto;
    width: 90%;

    .hearder-body-main {
      display: flex;
      gap: 30px;
      height: 50px;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .button-header-main {
        outline-style: none;
        color: white;
        background-color: var(--gray-3);
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6px 8px;
        font-weight: 300;
      }
    }

    h2 {
      font-family: var(--font-family);
      color: var(--gray-0);
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }
    p {
      font-family: var(--font-family);
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      color: #ffffff;
    }
    @media (min-width: 450px) {
      display: flex;
      flex-direction: column;
      width: 70%;

      justify-content: center;
    }
    .container-list {
      background-color: var(--gray-3);

      margin-bottom: 30px;
      border-radius: 4px;
      overflow-y: auto;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
export const Span = styled.span`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: var(--gray-1);
`;
