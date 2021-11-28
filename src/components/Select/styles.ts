import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;

  @media only screen and (min-width: 600px) {
    max-width: 150px;
  }
`;

export const Title = styled.label`
  font-size: 10px;
  font-weight: 500;
  color: #787885;

  position: absolute;
  left: 12px;
  top: -5px;
  background-color: #ffffff;
  z-index: 1;
  padding: 0px 2px;
`;

export const SelectContainer = styled.div.attrs(
  (props: { isNotSortBy: boolean }) => props
)`
  width: 100%;
  height: 100%;
  border: ${(props) => (!props.isNotSortBy ? "1px solid #5a5b6a" : "none")};
  border-radius: 4px;

  position: relative;
`;

export const SelectButton = styled.button`
  width: 100%;
  height: 100%;
  color: #19191d;
  padding: 12px;

  border: none;
  background-color: transparent;

  display: flex;
  flex-direction: row;

  transition: 0.2s;

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const TriangleContainer = styled.div`
  position: absolute;
  right: 15px;
`;

export const Text = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #19191d;
`;

export const Options = styled.div.attrs((props: { isOpen: boolean }) => props)`
  display: ${(props) => (props.isOpen ? "block" : "none")};

  width: 100%;
  max-height: 200px;
  overflow: auto;

  border: 1px solid #787885;
  border-radius: 4px;

  position: absolute;
  top: 40px;
  z-index: 11;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  padding-left: 15px;

  width: 100%;
  height: 40px;

  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #787885;
`;
