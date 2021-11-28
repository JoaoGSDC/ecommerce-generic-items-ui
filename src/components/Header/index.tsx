import React from "react";
import { ReactComponent as Burger } from "../../assets/images/icons/burger.svg";
import logo from "../../assets/images/logo.png";
import CartButton from "../CartButton";
import Search from "../Search";
import Select from "../Select";

import {
  BurgerButton,
  ContainerItems,
  HeaderContainer,
  LogoImg,
} from "./styles";

interface IPropsDTO {
  onChangeSearchValue: any;
}

const Header = ({ onChangeSearchValue }: IPropsDTO) => {
  return (
    <>
      <HeaderContainer>
        <LogoImg src={logo} alt="logo" />

        <Search onChange={(value: any) => onChangeSearchValue(value)} />

        <ContainerItems>
          <BurgerButton type="button" onClick={() => {}}>
            <Burger />
          </BurgerButton>

          <Select data={["English", "Portuguese"]} isNotSortBy />

          <CartButton />
        </ContainerItems>
      </HeaderContainer>
    </>
  );
};

export default Header;
