import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;

  .modal-cadastrar {
    position: relative;
    width: 90%;
    max-width: 370px;
    height: 270px;

    .header-modal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--gray-2);
      padding: 5px 10px;
      height: 50px;
      border-radius: 4px 4px 0px 0px;

      button {
        outline-style: none;
        background-color: var(--gray-2);
        display: flex;
        align-items: center;
        color: var(--gray-1);
      }
    }
    .Form-modal {
      background-color: var(--gray-3);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding-top: 15px;
      border-radius: 0px 0px 4px 4px;

      .input-modal {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 16px;
        gap: 10px;

        background-color: var(--gray-2);
        border: 1px solid var(--gray-0);
        border-radius: 4px;
        height: 28px;
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: var(--gray-0);
      }
      .select-modal {
        box-sizing: border-box;
        background-color: var(--gray-2);
        border: 1px solid var(--gray-0);
        border-radius: 4px;
        height: 30px;
        padding: 0px 10px;
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: var(--gray-0);
        height: 50px;
        width: 100%;
      }
      .div-form {
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 10px;
        justify-content: flex-start;
      }
      .button-modal {
        width: 90%;
      }
    }
  }
`;
