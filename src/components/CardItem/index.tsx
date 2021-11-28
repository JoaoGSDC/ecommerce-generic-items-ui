import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../Select";
import Stars from "../Stars";
import Notification from "../Notification";
import image from "../../assets/images/Image.png";
import {
  ButtonAddCart,
  Container,
  ContainerRow,
  ImageContainer,
  ImageItem,
  NameItem,
  NoteText,
  PriceText,
} from "./styles";
import { IProductsDTO } from "../../interfaces/IProductsDTO";

interface IPropsDTO {
  product: IProductsDTO;
}

const CardItem = ({ product }: IPropsDTO) => {
  const dispatch: any = useDispatch();

  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [amountItem, setAmountItem] = useState<number>(1);

  const subtotal: number = useSelector((state: any) => state.total);
  const amountStore: number = useSelector((state: any) => state.amount);

  const addItemToCart = () => {
    const amount = amountItem > 1 ? amountStore + amountItem : amountStore + 1;
    const total = subtotal + product.price * amountItem;

    dispatch({ type: "ADD_AMOUNT", amount });
    dispatch({ type: "ADD_TOTAL_VALUE", total });
    setOpenNotification(true);
  };

  return (
    <>
      <Container>
        <ImageContainer>
          <ImageItem src={product.image.url} alt="img" />
        </ImageContainer>

        <NameItem>{product.name}</NameItem>

        <ContainerRow>
          <Stars />

          <NoteText>{product.avaliation}</NoteText>
        </ContainerRow>

        <ContainerRow>
          <PriceText>${product.price}</PriceText>

          <Select
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            isNotSortBy
            onSelect={(value: any) => setAmountItem(value)}
          />
        </ContainerRow>

        <ButtonAddCart type="button" onClick={() => addItemToCart()}>
          Add to cart
        </ButtonAddCart>

        <Notification
          message="Added to cart successfully"
          isOpen={openNotification}
          onClose={(value: boolean) => setOpenNotification(value)}
        />
      </Container>
    </>
  );
};

export default CardItem;
