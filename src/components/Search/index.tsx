import React from "react";
import { ReactComponent as MagnifyingGlass } from "../../assets/images/icons/magnifying-glass.svg";
import useLanguage from "./lang";
import { Container } from "./styles";

interface IPropsDTO {
  onChange?: any;
}

const Search = ({ onChange }: IPropsDTO) => {
  const language = useLanguage('ptBr')();

  const handleSearchInputValue = (
    element: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(element.target.value);
  };

  return (
    <>
      <Container>
        <MagnifyingGlass />

        <input
          type="text"
          placeholder={language.searchPlaceholder}
          onChange={handleSearchInputValue}
        />
      </Container>
    </>
  );
};

export default Search;
