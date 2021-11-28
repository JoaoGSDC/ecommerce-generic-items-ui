import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button:first-of-type {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const CircleButton = styled.button.attrs(
  (props: { isCurrentPager: boolean; hasShowArrow: boolean }) => props
)`
  background-color: ${(props) =>
    props.isCurrentPager ? "#1671C0" : "#ffffff"};
  color: ${(props) => (props.isCurrentPager ? "#ffffff" : "#777777")};
  border: 1px solid #bcbdbc;
  border-radius: 50%;

  height: 32px;
  width: 32px;
  margin: 0px 6px;

  display: ${(props) => (props.hasShowArrow ? "block" : "none")};
`;
