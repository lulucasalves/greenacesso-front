import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 790px) {
    flex-direction: column;
  }
`;

export const FiltersModal = styled.div`
  display: none;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  border-radius: 8px;

  @media (max-width: 1040px) {
    display: flex;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 790px) {
    display: none;
  }
`;

export const Card = styled.div<{ layout: boolean }>`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ layout }) =>
    layout ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.4)"};

  cursor: pointer;
  transition: 0.3s;

  &:first-child {
    border-radius: 8px 0 0 8px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }

  &:hover {
    transition: 0.3s;
    background-color: rgba(255, 255, 255, 0.1);

    svg {
      transition: 0.3s;
      fill: ${colors.white};
    }
  }

  svg {
    transition: 0.3s;
    fill: ${({ layout }) => (layout ? "white" : "rgba(255, 255, 255, 0.5)")};
  }
`;
