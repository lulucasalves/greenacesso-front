import styled from "styled-components";
import { colors } from "~/styles/colors";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  padding: 0 20px;
`;

export const ModalContent = styled.div`
  background-color: ${colors.blueblack};
  border-radius: 0.8rem;
  padding: 30px;
  max-width: 800px;
  width: 100%;
`;
