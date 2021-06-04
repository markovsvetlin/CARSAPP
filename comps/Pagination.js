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

  console.log(currentPage);
  return (
    <PaginationContainer>
      <ArrowButton
        onClick={prevPage}
        disabled={currentPage === 1 ? true : false}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </ArrowButton>

      {pageNumbers
        .slice(currentPage < 5 ? currentPage - 1 : 3, currentPage + 2)
        .map((number, index) =>
          number < 8 ? (
            <PageButton
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

      {pageNumbers.slice(7, 8).map((number, index) => (
        <PageButton
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
  margin-left: 70px;
  margin-bottom: 50px;
`;

const PageButton = styled.button`
  background-color: ${({ current, number }) =>
    current === number ? "black" : "white"};
  color: ${({ current, number }) => (current !== number ? "black" : "white")};
  padding: 10px 15px;
  margin: 5px;
`;
const DotButton = styled.button`
  background-color: white;
  padding: 10px 15px;
`;
const ArrowButton = styled.button`
  background-color: white;
  padding: 10px 15px;
`;
