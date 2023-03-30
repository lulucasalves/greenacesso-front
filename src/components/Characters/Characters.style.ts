import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  flex-wrap: wrap;
  width: 95%;
  justify-content: center;
`;
