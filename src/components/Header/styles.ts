import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-right: 20px;

  svg {
    height: 12px;
    width: 18px;
  }

  @media only screen and (min-width: 600px) {
    justify-content: space-between;
  }
`;

export const LogoImg = styled.img`
  display: none;
  height: 14px;
  margin-left: 20px;

  @media only screen and (min-width: 600px) {
    display: flex;
  }
`;

export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    div {
      display: none;
    }

    button {
      display: none;
    }
  }
`;
