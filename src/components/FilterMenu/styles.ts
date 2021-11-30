import styled, { keyframes } from "styled-components";

const heightAnimation = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 50%;
  }
`;

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 10;
  height: 50%;
  background-color: #f9f9f9;
  padding: 21px;
  width: calc(100% - 42px);
  animation: ${heightAnimation} 0.2s;

  @media only screen and (min-width: 600px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const TitleText = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  height: 14px;
  width: 14px;

  svg {
    font-size: 14px;
    color: #000000;
  }
`;

export const FieldsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 41px;

  input {
    height: 24px;
    border: 1px solid #b4b4bb;
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    margin-top: 0px;
    width: 100%;

    input {
      height: 12px;
      margin-right: 16px;
    }
  }
`;

export const BlackContainer = styled.div.attrs(
  (props: { isOpen: boolean }) => props
)`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9;
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  background-color: rgba(0, 0, 0, 0.5);

  animation: ${opacityAnimation} 0.2s;

  @media only screen and (min-width: 600px) {
    position: relative;
    height: 72px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media only screen and (min-width: 600px) {
    height: 100%;
  }
`;

export const ButtonSecondary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #2264d1;
  font-size: 16px;
  font-weight: 600;
  border: none;
  padding: 8px 0px;
  height: 40px;
  width: 50%;
  margin-right: 8px;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const ButtonPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #2264d1;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #2264d1;
  padding: 8px 0px;
  height: 40px;
  width: 50%;
  margin-left: 8px;

  @media only screen and (min-width: 600px) {
    width: 150px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    width: 100%;
  }
`;
