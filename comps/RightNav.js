import styled from 'styled-components'
import Link from 'next/link'



const RightNav = ({ open, setOpen }) => {
  return (
    <Ul onClick={()=>setOpen(false)} open={open}>
      <Link href='/'>
                Home
            </Link>
            <Link href='/Recipes'>
                Recipes
            </Link>
            <Link href='/Article'>
                Article
            </Link>
            <Link href='/Contact'>
                Contact
            </Link>
            <Link href='/Purchase'>
                Purchase
            </Link>
    </Ul>
  )
}

export default RightNav


const Ul = styled.ul`
z-index:1;
   display: flex;
  flex-direction :column;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
a{
    color:white;
    text-decoration:none;
    font-size:26px;
}
`;
