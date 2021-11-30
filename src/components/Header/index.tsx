import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Burger } from "../../assets/images/icons/burger.svg";
import logo from "../../assets/images/logo.png";
import CartButton from "../CartButton";
import Search from "../Search";
import Select from "../Select";
import useLanguage from "./lang";

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
  const dispatch = useDispatch();

  const langOption: string = useSelector((state: any) => state.langOption);
  const language = useLanguage(langOption)();

  const languages = ["en", "ptBr"];

  const changeLanguageApplication = (lang: string) => {
    const langIndex = language.optionsOfSelect.findIndex(
      (option: string) => option === lang
    );

    const langOption = languages[langIndex];

    dispatch({ type: "ADD_LANG", langOption });
  };

  return (
    <>
      <HeaderContainer>
        <LogoImg src={logo} alt="logo" />

        <Search onChange={(value: any) => onChangeSearchValue(value)} />

        <ContainerItems>
          <BurgerButton type="button" onClick={() => {}}>
            <Burger />
          </BurgerButton>

          <Select
            data={language.optionsOfSelect}
            isNotSortBy
            onSelect={(value: any) => changeLanguageApplication(value)}
          />

          <CartButton />
        </ContainerItems>
      </HeaderContainer>
    </>
  );
};

export default Header;
