import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 20px);
  height: 72px;
  background-color: #ffffff;

  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

  position: absolute;
  z-index: 3;
  left: 10px;
  bottom: 10px;

  font-size: 14px;
  font-weight: 400;
  color: #000000;

  animation: ${opacityAnimation} 0.2s;

  svg {
    margin-right: 15px;
    color: #787885;
  }
`;
