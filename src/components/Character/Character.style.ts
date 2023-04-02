import styled from "styled-components";

import { colors } from "~/styles/colors";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharacterContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(https://i.makeagif.com/media/6-14-2017/lF44-a.gif);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const CardImage = styled.div<{ url: string }>`
  width: 250px;
  background-size: cover;
  height: 250px;
  border-radius: 16px;
  background-image: ${({ url }) => url && `url(${url})`};
  position: relative;
  transition: 0.3s;
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-self: start;
  gap: 30px;
  font-size: 18px;
  flex-wrap: wrap;

  span {
    margin-right: 2px;
    font-weight: 500;
  }
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
  gap: 7px;
  flex-wrap: wrap;
  margin-top: 50px;
  align-self: start;

  span {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    padding: 5px 10px;
    background: ${colors.blue};
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Favorites = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;

  div {
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.7);
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);

    svg {
      fill: rgba(255, 255, 255, 0.7);
    }
  }

  .add {
    color: rgba(252, 198, 0, 0.8);
    background: rgba(252, 196, 0, 0.1);

    svg {
      fill: rgba(252, 198, 0, 0.8) !important;
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
