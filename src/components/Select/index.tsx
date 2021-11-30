import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Triangle } from "../../assets/images/icons/triangle.svg";
import useLanguage from "./lang";
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
  isNumber?: boolean;
  isNotSortBy?: boolean;
  data: any[];
  onSelect?: any;
}

const Select = ({
  data,
  isNotSortBy = false,
  onSelect,
  isNumber = false,
}: IPropsDTO) => {
  const langOption: string = useSelector((state: any) => state.langOption);
  const language = useLanguage(langOption)();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<any>();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedOption(data[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const selectOption = (value: any) => {
    const indexOfValue: number = data.findIndex(
      (valueOfData: any) => valueOfData === value
    );

    setIndex(indexOfValue);

    setSelectedOption(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <>
      <Container isNumber={isNumber}>
        {!isNotSortBy ? <Title>{language.title}</Title> : <></>}

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
