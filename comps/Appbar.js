import Link from 'next/link'
import styled from 'styled-components'
import Search from './Search'




const Appbar = () => {
   
    return ( 
        <div>
            <Container>
            <Logo>Premium CAR</Logo>
            <MenuContainer>
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
            </MenuContainer>
            <Search/>

            </Container>
        </div>
    )
}

export default Appbar

//styles


const Container = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
background-color:black;
height:90px;


`
const Logo = styled.h3`

`
const MenuContainer = styled.div`
display:flex;


a{
    margin:10px;
    text-decoration:none;
    color: white;
}
`