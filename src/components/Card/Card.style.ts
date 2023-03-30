import styled from "styled-components";
import { colors } from "~/styles/colors";

export const CardContainer = styled.div<{
  alive: "Dead" | "Alive" | "unknown";
}>`
  width: 320px;
  padding: 30px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 0px 20px -2.5px ${colors.whiteOpacity};
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 20px 10px
      ${({ alive }) =>
        alive === "Alive"
          ? colors.greenOpacity
          : alive === "Dead"
          ? colors.redOpacity
          : colors.whiteOpacity};
    transition: 0.3s;
  }

  gap: 10px;
`;

export const CardImage = styled.div<{ url: string }>`
  width: 200px;
  background-size: cover;
  height: 200px;
  border-radius: 16px;
  background-image: ${({ url }) => url && `url(${url})`};
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

  p {
    color: ${colors.blueblack};
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  p {
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.8);
    span {
      font-weight: 500;
    }
  }
`;

export const Episodes = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

export const IsAlive = styled.div<{ alive: "Alive" | "Dead" | "unknown" }>`
  display: flex;
  align-items: center;
  gap: 7px;
  text-transform: capitalize;

  svg {
    fill: ${({ alive }) =>
      alive === "Alive"
        ? colors.green
        : alive === "Dead"
        ? colors.red
        : "rgba(255, 255, 255, 0.8)"};
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  svg {
    fill: rgba(255, 255, 255, 0.8);
  }
`;
