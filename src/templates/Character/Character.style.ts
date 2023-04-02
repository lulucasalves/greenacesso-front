import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 100px;
  overflow-x: hidden;

  @media (max-width: 1040px) {
    padding: 50px;
  }

  @media (max-width: 500px) {
    padding: 50px 15px;
  }
`;
