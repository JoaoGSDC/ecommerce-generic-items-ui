import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../../assets/images/icons/close.svg";
import Select from "../Select";
import useLanguage from "./lang";
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
  const { innerWidth } = window;
  const dispatch = useDispatch();

  const langOption: string = useSelector((state: any) => state.langOption);
  const language = useLanguage(langOption)();

  const [minFilterValue, setMinFilterValue] = useState<number>(-1);
  const [maxFilterValue, setMaxFilterValue] = useState<number>(-1);
  const [ratingFilterValue, setRatingFilterValue] = useState<number>(-1);

  const applyFilters = () => {
    if (innerWidth > 600 && minFilterValue === -1 && maxFilterValue === -1) {
      cleanFilters();
    }

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
    dispatch({ type: "ADD_RATING_FILTER", ratingFilter: ratingFilterValue });

    onClose(false);
  };

  const cleanFilters = () => {
    dispatch({ type: "DEL_MIN_FILTER", minPriceFilter: -1 });
    dispatch({ type: "DEL_MAX_FILTER", maxPriceFilter: -1 });
    dispatch({ type: "DEL_RATING_FILTER", ratingFilter: -1 });

    onClose(false);
  };

  const handleValuesFilter = (value: string) => {
    const numberValue = Number(Number(value).toFixed(2));

    if (!numberValue) {
      return -1;
    }

    return numberValue;
  };

  const changeRatingFilter = (value: string) => {
    const optionIndex = language.optionsOfSelect.findIndex(
      (option: string) => option === value
    );

    setRatingFilterValue(optionIndex === 0 ? 1 : 5);
  };

  return (
    <>
      <BlackContainer isOpen={isOpen}>
        <Container>
          <ContainerHeader>
            <TitleText>{language.title}</TitleText>

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

              <Select
                data={language.optionsOfSelect}
                onSelect={(value: string) => changeRatingFilter(value)}
              />
            </FieldsContainer>

            <ButtonsContainer>
              <ButtonSecondary type="button" onClick={() => cleanFilters()}>
                {language.secondaryButton}
              </ButtonSecondary>

              <ButtonPrimary type="button" onClick={() => applyFilters()}>
                {language.primaryButton}
              </ButtonPrimary>
            </ButtonsContainer>
          </ContainerForm>
        </Container>
      </BlackContainer>
    </>
  );
};

export default FilterMenu;
