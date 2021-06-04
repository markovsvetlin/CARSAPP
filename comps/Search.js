import {useState} from 'react'
import styled from 'styled-components';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'


const Search = () => {
const [open, setOpen] = useState(false)


    return (
        <>
        {!open ?  <div style={{paddingRight:40}} >
            <FontAwesomeIcon onClick={()=>setOpen(true)} icon ={faSearch} />
        </div>  : <SearchContainer >
        <input type='text' placeholder='Search...' name='search' />
        <FontAwesomeIcon onClick = {()=>setOpen(false)}  icon ={faArrowUp} />
        </SearchContainer>  }
       
        
        
        </>
    )
}

export default Search

const SearchContainer = styled.div`
width:100%;
height:600px;
background-color:black;
position:absolute;
opacity:70%;
z-index:1;
input {
    width:30%;
    position:absolute;
    bottom:100px;;
    font-size:30px;
    z-index:3;
    right:680px;
    background-color:transparent;
    border:none;
    outline:none;
    border-bottom: 1px solid white;
    color:white;
    font-style:italic;
}
svg{
    position:absolute;
    top:550px;
    right:30px;
    z-index:4;
    color:red;
    cursor:pointer;
    font-size:30px;
}


`