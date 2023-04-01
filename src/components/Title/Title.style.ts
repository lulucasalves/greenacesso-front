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

  button {
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
