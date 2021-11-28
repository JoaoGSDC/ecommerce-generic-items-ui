import React from "react";

import { Container } from "./styles";

import { ReactComponent as FullStar } from "../../assets/images/icons/full-star.svg";
import { ReactComponent as MiddleStar } from "../../assets/images/icons/middle-star.svg";

const Stars = () => {
  return (
    <>
      <Container>
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
        <MiddleStar />
      </Container>
    </>
  );
};

export default Stars;
