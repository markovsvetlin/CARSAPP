import Link from "next/link";
import styled from "styled-components";
import Search from "./Search";
import { useState } from "react";
import RightNav from "./RightNav";
import useWindowDimensions from "./useWindowDemensions";
const Appbar = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  return width > 812 ? (
    <Container>
      <Logo>
        Premium <span>CAR</span>
      </Logo>
      <MenuContainer>
        <Link href="/">Home</Link>
        <Link href="/Recipes">Recipes</Link>
        <Link href="/Article">Article</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/Purchase">Purchase</Link>
      </MenuContainer>

      <Search className="search" />
    </Container>
  ) : (
    <Container>
      <Logo>Premium CAR</Logo>
      <MenuButton open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </MenuButton>
      <RightNav setOpen={setOpen} open={open} />
    </Container>
  );
};

export default Appbar;

//styles

const Container = styled.div`
  * {
    font-family: PT Sans;
  }
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  align-items: center;
  background-color: black;
  height: 5.625em;
  .search {
    margin-right: 30px;
    width: 16px;
    color: #929eaf;
  }
  @media (max-width: 1025) {
    width: 30%;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 3;
  }
  @media (max-width: 768px) {
    justify-content:space-between;
`;
const Logo = styled.h3`
  width: 12%;
  padding: 0em 1.3em;
  font-size: 1em;
  text-align: center;
  @media (max-width: 400) {
    padding: 0em;
  }
  span {
    background-color: #4267b2;
    padding: 0.3em;
  }
`;
const MenuContainer = styled.div`
  display: flex;

  justify-content: center;

  a {
    margin: 0.625em;
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    font-family: PT Sans;
  }
`;
const MenuButton = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 0.938em;
  right: 1.25em;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  padding: 10px;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
