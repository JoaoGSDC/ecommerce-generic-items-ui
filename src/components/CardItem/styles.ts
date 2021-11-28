import styled from "styled-components";

export const Container = styled.div`
  flex: 1 0 21%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #f0f0f0;
  padding: 10px;

  flex-direction: column;
  margin: 10px;

  @media only screen and (min-width: 600px) {
    flex: 1 0 25%;
  }
`;

export const ImageContainer = styled.div`
  height: 145px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const ImageItem = styled.img`
  width: 100%;
`;

export const NameItem = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: #19191d;
  margin-bottom: 8px;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  align-items: center;
  margin-bottom: 8px;
`;

export const PriceText = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  margin-right: 28px;
`;

export const ButtonAddCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background-color: #ffffff;
  color: #2264d1;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
`;

export const NoteText = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #5e6366;
  margin-right: 20px;
`;
