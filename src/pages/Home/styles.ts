import styled from "styled-components";

export const ContainerFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  div:first-child {
    margin: 0px 16px;
  }

  @media only screen and (min-width: 600px) {
    justify-content: center;

    div:first-child {
      max-width: 15%;
    }
  }
`;

export const FilterButton = styled.button`
  color: #2264d1;
  font-size: 14px;
  margin-right: 16px;
  margin-left: 122px;

  background-color: transparent;
  border: none;

  transition: 0.2s;

  &:active {
    color: #133c7e;
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 600px) {
    max-width: 55%;
  }
`;

export const ContainerItemsMain = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const ContainerPagination = styled.div`
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
  margin-bottom: 10px;

  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    border-bottom: none;
  }
`;

export const CartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
