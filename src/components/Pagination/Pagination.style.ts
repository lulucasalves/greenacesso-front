import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.section`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

export const Page = styled.div<{ active: boolean }>`
  cursor: pointer;
  padding: 5px;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.5)"};
`;
