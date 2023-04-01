import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;

  .effect-7 {
    width: 100%;
    font-size: 18px;
    height: 50px;
    border: none;
    padding-left: 20px;
    background-color: rgba(255, 255, 255, 0.1);

    &:focus {
      outline: none;
    }
  }

  .effect-7 ~ .focus-border:before,
  .effect-7 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: ${colors.whiteOpacity};
    transition: 0.4s;
  }

  .effect-7 ~ .focus-border:after {
    top: auto;
    bottom: 0;
  }

  .effect-7 ~ .focus-border i:before,
  .effect-7 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 0;
    background-color: ${colors.whiteOpacity};
    transition: 0.6s;
  }

  .effect-7 ~ .focus-border i:after {
    left: auto;
    right: 0;
  }

  .effect-7:focus ~ .focus-border:before,
  .effect-7:focus ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }

  .effect-7:focus ~ .focus-border i:before,
  .effect-7:focus ~ .focus-border i:after {
    top: 0;
    height: 100%;
    transition: 0.6s;
  }

  button {
    height: 50px;
    width: 60px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
