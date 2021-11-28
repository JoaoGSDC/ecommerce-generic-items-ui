import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Close } from "../../assets/images/icons/close.svg";
import Select from "../Select";
import {
  BlackContainer,
  ButtonPrimary,
  ButtonsContainer,
  ButtonSecondary,
  CloseButton,
  Container,
  ContainerForm,
  ContainerHeader,
  FieldsContainer,
  TitleText,
} from "./styles";

interface IPropsDTO {
  isOpen: boolean;
  onClose: any;
}

const FilterMenu = ({ isOpen, onClose }: IPropsDTO) => {
  const dispatch = useDispatch();

  const [minFilterValue, setMinFilterValue] = useState<number>(-1);
  const [maxFilterValue, setMaxFilterValue] = useState<number>(-1);

  const applyFilters = () => {
    if (
      minFilterValue > maxFilterValue ||
      minFilterValue === undefined ||
      maxFilterValue === undefined ||
      minFilterValue === -1 ||
      maxFilterValue === -1
    ) {
      return;
    }

    dispatch({ type: "ADD_MIN_FILTER", minPriceFilter: minFilterValue });
    dispatch({ type: "ADD_MAX_FILTER", maxPriceFilter: maxFilterValue });

    onClose(false);
  };

  const cleanFilters = () => {
    dispatch({ type: "DEL_MIN_FILTER", minPriceFilter: -1 });
    dispatch({ type: "DEL_MAX_FILTER", maxPriceFilter: -1 });

    onClose(false);
  };

  const handleValuesFilter = (value: string) => {
    const numberValue = Number(Number(value).toFixed(2));

    if (!numberValue) {
      return -1;
    }

    return numberValue;
  };

  return (
    <>
      <BlackContainer isOpen={isOpen}>
        <Container>
          <ContainerHeader>
            <TitleText>FILTERS</TitleText>

            <CloseButton type="button" onClick={() => onClose(false)}>
              <Close />
            </CloseButton>
          </ContainerHeader>

          <ContainerForm>
            <FieldsContainer>
              <input
                type="number"
                placeholder="€ Max"
                min={0}
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(element: React.ChangeEvent<HTMLInputElement>) =>
                  setMaxFilterValue(handleValuesFilter(element.target.value))
                }
              />

              <input
                type="number"
                placeholder="€ Min"
                min={0}
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(element: React.ChangeEvent<HTMLInputElement>) =>
                  setMinFilterValue(handleValuesFilter(element.target.value))
                }
              />

              <Select data={["Rating"]} />
            </FieldsContainer>

            <ButtonsContainer>
              <ButtonSecondary type="button" onClick={() => cleanFilters()}>
                Clear
              </ButtonSecondary>

              <ButtonPrimary type="button" onClick={() => applyFilters()}>
                Apply filters
              </ButtonPrimary>
            </ButtonsContainer>
          </ContainerForm>
        </Container>
      </BlackContainer>
    </>
  );
};

export default FilterMenu;
