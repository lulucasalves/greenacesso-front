import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
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

  button {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    width: 100%;
    font-weight: 500;
    margin-top: 30px;
    font-size: 16px;
    border-radius: 8px;
  }
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
