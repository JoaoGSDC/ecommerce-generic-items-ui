import React, { useState } from "react";
import { ReactComponent as MagnifyingGlass } from "../../assets/images/icons/magnifying-glass.svg";
import { Container } from "./styles";

interface IPropsDTO {
  onChange?: any;
}

const Search = ({ onChange }: IPropsDTO) => {
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
          placeholder="useless items on white..."
          onChange={handleSearchInputValue}
        />
      </Container>
    </>
  );
};

export default Search;
