import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleCount = styled.div.attrs(
  (props: { haveItems: boolean }) => props
)`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: #f44336;

  display: ${(props) => (props.haveItems ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -15px;
  left: 10px;

  font-size: 14px;
  font-weight: 700;
`;
