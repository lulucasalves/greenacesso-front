import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: none;
  flex-direction: column;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  height: 100%;

  @media (max-width: 1040px) {
    display: flex;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const Selects = styled.div`
  width: 100%;
  margin-top: 40px;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.div`
  width: 100%;
  position: relative;
  height: 50px;

  svg {
    position: absolute;
    top: 50%;
    fill: rgba(255, 255, 255, 0.7);
    left: 10px;
    transform: translateY(-50%);
  }

  select {
    border-radius: 8px;
    width: 100%;
    outline: none;
    padding-left: 40px;
    font-size: 0.88rem;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.1) url("/icons/arrow-down.svg") 95% center /
      20px no-repeat;
    color: rgba(255, 255, 255, 0.8);
    height: 50px;
    border: none;
    appearance: none;
    transition: all 0.3s ease 0s;
  }
`;
