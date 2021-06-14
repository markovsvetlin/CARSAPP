import { useState } from "react";
import styled from "styled-components";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  // console.log(currentPage);
  return (
    <PaginationContainer>
      <ArrowButton
        onClick={prevPage}
        disabled={currentPage === 1 ? true : false}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </ArrowButton>

      {pageNumbers
        ?.slice(currentPage < 5 ? currentPage - 1 : 3, currentPage + 2)
        ?.map((number, index) =>
          number < 8 ? (
            <PageButton
              key={index}
              onClick={() => setCurrentPage(number)}
              number={number}
              current={currentPage}
            >
              {number}
            </PageButton>
          ) : (
            ""
          )
        )}
      {currentPage < 5 ? <DotButton disabled>....</DotButton> : ""}

      {pageNumbers?.slice(7, 8)?.map((number, index) => (
        <PageButton
          key={index}
          onClick={() => setCurrentPage(number)}
          number={number}
          current={currentPage}
        >
          {number}
        </PageButton>
      ))}

      <ArrowButton
        onClick={nextPage}
        disabled={currentPage === pageNumbers.length ? true : false}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  * {
    font-family: PT Sans;
  }
  margin: 70px 0px 50px 0px;
  display: flex;
  padding-left: 120px;
  @media (max-width: 600px) {
    justify-content: center;
    padding-left: 0px;
  }
`;

const PageButton = styled.button`
  background-color: ${({ current, number }) =>
    current === number ? "black" : "white"};
  color: ${({ current, number }) => (current !== number ? "black" : "white")};
  padding: 10px 15px;
  margin: 5px;
  font-size: 16px;
  line-height: 16px;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  @media (max-width: 400px) {
    font-size: 12px;
    padding: 10px 10px;
  }
`;
const DotButton = styled.button`
  background-color: white;
  padding: 5px 15px;
  font-size: 16px;
  margin: 5px;
  border: 1px solid #e5e5e5;
  @media (max-width: 768px) {
    padding: 2px 8px;
  }
`;
const ArrowButton = styled.button`
  background-color: white;
  margin: 5px 8px;
  padding: 1px 15px;

  mix-blend-mode: normal;
  opacity: 0.4;
  border: 1px solid #e5e5e5;
  font-size: 8px;
  @media (max-width: 400px) {
    padding: 0px 10px;
    font-size: 10px;
  }
`;
