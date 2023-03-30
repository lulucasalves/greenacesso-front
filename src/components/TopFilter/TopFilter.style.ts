import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px 0 0 4px;
    padding-left: 20px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  button {
    border-radius: 0 4px 4px 0;
    height: 40px;
    width: 60px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
