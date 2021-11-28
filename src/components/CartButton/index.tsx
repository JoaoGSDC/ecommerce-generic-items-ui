import React from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart";
import { Container } from "./styles";

const CartButton = () => {
  const subtotal: number = useSelector((state: any) => state.total);

  return (
    <>
      <Container>
        <Cart />
        Sub total: {subtotal.toFixed(2)} €
      </Container>
    </>
  );
};

export default CartButton;
