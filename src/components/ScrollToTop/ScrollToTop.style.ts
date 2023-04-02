import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: rgb(0, 0, 0);
  opacity: 0.9;
  justify-content: center;
  align-items: center;
  width: 50px;
  z-index: 200;
  height: 50px;
  border-radius: 50%;
  animation-name: up;
  animation-duration: 1s;
  cursor: pointer;

  @keyframes up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
