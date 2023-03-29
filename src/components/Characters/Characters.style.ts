import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
`;

export const CardContainer = styled.div`
  padding: 30px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 0px 20px -2.5px rgba(255, 255, 255, 0.5);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 20px 10px rgba(111, 208, 44, 0.5);
    transition: 0.3s;
  }

  gap: 10px;
`;

export const Card = styled.div`
  width: 200px;
  background-size: cover;
  height: 200px;
  border-radius: 16px;
  background-image: url("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
  position: relative;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: scale(1.05);
  }
`;

export const Name = styled.p`
  position: absolute;
  font-weight: 600;
  color: ${colors.blueblack};
  font-size: 16px;
  padding: 5px;
  bottom: 0;
  right: 0;
  border-radius: 0 0 12px 0;
  text-align: center;
  background-color: ${colors.white};
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;

  p {
    color: rgba(255, 255, 255, 0.8);
    span {
      font-weight: 500;
    }
  }
`;

export const Episodes = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

export const IsAlive = styled.div<{ alive: "alive" | "death" | "unknown" }>`
  display: flex;
  align-items: center;
  gap: 7px;

  svg {
    fill: ${({ alive }) =>
      alive === "alive"
        ? colors.green
        : alive === "death"
        ? "red"
        : "rgba(255, 255, 255, 0.8)"};
  }
`;
