import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;
  gap: 30px;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  p {
    font-size: 32px;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;

    button {
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 18px;
      background-color: rgba(255, 255, 255, 0.1);
    }

    .button2 {
      margin-left: 20px;

      @media (max-width: 500px) {
        margin-left: 0;
        margin-top: 20px;
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
`;
