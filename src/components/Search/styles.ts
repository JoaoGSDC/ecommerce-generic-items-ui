import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 25px 16px;

  position: relative;

  svg {
    position: absolute;
    right: 15px;
    color: #787885;
  }

  input {
    height: 40px;
    width: 100%;
    color: #000000;
    background-color: #ededf0;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    padding: 0px 45px 0px 10px;

    @media only screen and (min-width: 600px) {
      height: 48px;
    }
  }

  @media only screen and (min-width: 600px) {
    justify-content: space-between;
    width: 25%;
    margin-left: 275px;
  }
`;
