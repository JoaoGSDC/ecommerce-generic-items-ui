import React, { useState } from "react";

import { ReactComponent as Triangle } from "../../assets/images/icons/triangle.svg";
/* import icons from "../../assets/images/icons";
import Img from "../Img"; */
import {
  Container,
  SelectContainer,
  Title,
  SelectButton,
  TriangleContainer,
  Text,
  Options,
  Option,
} from "./styles";

interface IPropsDTO {
  isNotSortBy?: boolean;
  data: any[];
  onSelect?: any;
}

const Select = ({ data, isNotSortBy = false, onSelect }: IPropsDTO) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<any>(data[0]);

  const selectOption = (value: any) => {
    setSelectedOption(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <>
      <Container>
        {!isNotSortBy ? <Title>SORT BY</Title> : <></>}

        <SelectContainer isNotSortBy={isNotSortBy}>
          <SelectButton type="button" onClick={() => setIsOpen(!isOpen)}>
            <Text>{selectedOption}</Text>

            <TriangleContainer>
              <Triangle />
            </TriangleContainer>
          </SelectButton>
        </SelectContainer>

        <Options isOpen={isOpen}>
          {data.map((value: any) => {
            return (
              <Option key={value} onClick={() => selectOption(value)}>
                {value}
              </Option>
            );
          })}
        </Options>
      </Container>
    </>
  );
};

export default Select;
