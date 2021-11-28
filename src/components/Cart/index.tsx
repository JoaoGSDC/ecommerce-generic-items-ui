import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as CartSvg } from "../../assets/images/icons/cart.svg";
import { CircleCount, Container } from "./styles";

const Cart = () => {
  const amountStore: number = useSelector((state: any) => state.amount);

  return (
    <>
      <Container>
        <CircleCount haveItems={amountStore !== 0}>{amountStore}</CircleCount>
        <CartSvg />
      </Container>
    </>
  );
};

export default Cart;
