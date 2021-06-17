import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Search = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {!open ? (
        <SearchIcon onClick={() => setOpen(true)}>
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 489.713 489.713"
            version="1.1"
            viewBox="0 0 489.713 489.713"
            xmlSpace="preserve"
          >
            <path d="M483.4 454.444l-121.3-121.4c28.7-35.2 46-80 46-128.9 0-112.5-91.5-204.1-204.1-204.1S0 91.644 0 204.144s91.5 204 204.1 204c48.8 0 93.7-17.3 128.9-46l121.3 121.3c8.3 8.3 20.9 8.3 29.2 0s8.3-20.7-.1-29zm-442.7-250.3c0-90.1 73.2-163.3 163.3-163.3s163.4 73.3 163.4 163.4-73.3 163.4-163.4 163.4-163.3-73.4-163.3-163.5z"></path>
          </svg>
        </SearchIcon>
      ) : (
        <SearchContainer
          onClick={(e) => (e.currentTarget ? setOpen(true) : setOpen(false))}
          ref={node}
        >
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            name="search"
          />
        </SearchContainer>
      )}
    </>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 100%;
  padding-bottom: 100px;
  background-color: black;
  position: absolute;
  opacity: 70%;
  z-index: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .search-input {
    margin-top: 300px;
    width: 30%;
    height: 10%;
    background: rgba(0, 0, 0, 0.8);
    mix-blend-mode: normal;
    border: none;
    outline: none;
    border-bottom: 2px solid #ffffff;
    font-family: PT Sans;
    font-style: italic;
    font-weight: normal;
    font-size: 36px;
    line-height: 47px;
    color: rgba(255, 255, 255, 0.7);
  }
`;
const SearchIcon = styled.div`
  .search-icon {
    width: 20px;
    height: 20px;
    path {
      fill: white;
    }
  }
`;
