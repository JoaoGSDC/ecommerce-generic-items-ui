import styled from "styled-components";

export const Container = styled.button`
  height: 56px;
  width: 100%;
  padding: 16px;
  border: none;
  background-color: #2264d1;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  div {
    margin-right: 16px;
  }

  @media only screen and (min-width: 600px) {
    width: 280px;
  }
`;
