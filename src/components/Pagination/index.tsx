import React from "react";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import { CircleButton, Container } from "./styles";

interface IPropsDTO {
  currentPage: number;
  postPerPage: number;
  totalPosts: number;
  paginate: any;
  nextPage: any;
  prevPage: any;
}

const Pagination = ({
  currentPage,
  postPerPage,
  totalPosts,
  paginate,
  nextPage,
  prevPage,
}: IPropsDTO) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <Container>
        <CircleButton
          type="button"
          onClick={() => prevPage(1)}
          hasShowArrow={currentPage > 1}
        >
          <Arrow />
        </CircleButton>

        {pageNumber.map((num: any) => {
          return (
            <>
              <CircleButton
                hasShowArrow
                isCurrentPager={currentPage === num}
                key={num}
                type="button"
                onClick={() => paginate(num - 1)}
              >
                {num}
              </CircleButton>
            </>
          );
        })}

        <CircleButton
          hasShowArrow={currentPage !== Math.ceil(totalPosts / postPerPage)}
          type="button"
          onClick={() => nextPage(1)}
        >
          <Arrow />
        </CircleButton>
      </Container>
    </>
  );
};

export default Pagination;
