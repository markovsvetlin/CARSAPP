import { useState } from "react";
import styled from "styled-components";

const Pagination = () => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  return (
    <PaginationContainer>
      <ArrowButton
        onClick={prevPage}
        disabled={currentPage === 1 ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="50"
          y="50"
          enableBackground="new 0 0 25.451 25.451"
          version="1.1"
          viewBox="0 0 25.451 25.451"
          xmlSpace="preserve"
        >
          <path d="M20.982.521v2.006L8.57 12.315c-.121.101-.195.251-.195.41s.074.311.195.41l12.412 9.79v2.005a.52.52 0 01-.297.469.519.519 0 01-.549-.061L4.664 13.136a.531.531 0 010-.82L20.136.113a.523.523 0 01.846.408z"></path>
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 330 330"
          version="1.1"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
        >
          <path d="M250.606 154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 000-21.213z"></path>
        </svg>
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
  padding: 1px 5px;
  mix-blend-mode: normal;
  opacity: 0.4;
  border: 1px solid #e5e5e5;
  font-size: 8px;
  svg {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 400px) {
    padding: 0px 10px;
    font-size: 10px;
  }
`;
