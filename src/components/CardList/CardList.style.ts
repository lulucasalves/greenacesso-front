import styled from "styled-components";
import { colors } from "~/styles/colors";

export const CardContainer = styled.div<{
  alive: string;
}>`
  position: relative;

  .star {
    position: absolute;
    bottom: 30px;
    right: 30px;
    fill: rgba(252, 198, 0, 0.8);
    cursor: pointer;
    z-index: 20;
  }

  &:hover {
    .content {
      box-shadow: 0px 0px 20px 10px
        ${({ alive }) =>
          alive === "Alive"
            ? colors.greenOpacity
            : alive === "Dead"
            ? colors.redOpacity
            : colors.whiteOpacity};
      transition: 0.3s;

      .cardImage {
        transition: 0.3s;
        transform: scale(1.05);
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 30px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  border-radius: 16px;
  box-shadow: 0px 0px 20px -2.5px ${colors.whiteOpacity};
  transition: 0.3s;
  gap: 30px;
  position: relative;
`;

export const CardImage = styled.div<{ url: string }>`
  width: 250px;
  background-size: cover;
  height: 200px;
  border-radius: 16px;
  background-image: ${({ url }) => url && `url(${url})`};
  position: relative;
  transition: 0.3s;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.p`
  font-family: "Sriracha";
  color: ${colors.white};
  font-size: 24px;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

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

export const IsAlive = styled.div<{ alive: string }>`
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
  gap: 3px;

  svg {
    fill: rgba(255, 255, 255, 0.8);
  }
`;

export const AliveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
