import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Post from './Post'
import { useMediaQuery } from 'react-responsive';

const Footer = ({ images }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <>
        <Container isMobile={isMobile}>
            <Contact isMobile={isMobile}>
                <h3>Premium Car</h3>
                <p>loremLorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard</p>
                <h2>Keep in touch</h2>
                <Icons>

                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faPinterestP} />
                    <FontAwesomeIcon icon={faGooglePlusG} />
                    <FontAwesomeIcon icon={faInstagram} />
                </Icons>
            </Contact>
            {!isMobile && <RecentPosts>
                <h3>Recent Posts</h3>
                {images.slice(0, 2).map(image => <Post image={image} />)}
            </RecentPosts>}
           
        </Container>
         <Rights>
         <h3>@2019 Logwork. All Right Reserved</h3>
        </Rights>
        </>
    )
}

export default Footer


const Container = styled.div`
display:grid;
grid-template-columns: ${({ isMobile }) => !isMobile ? '1fr 1fr 1fr' : '1fr'} ; 
column-gap:50px;
width:100%;
height:600px;
background-color:#0e1111;

`
const Contact = styled.div`
margin-left: ${({ isMobile }) => !isMobile ? '100px' : '30px'} ; 
padding-left: ${({ isMobile }) => !isMobile ? '100px' : '30px'} ; 
padding-top:60px;
h2{
    margin-top:110px;
}

`
const Icons = styled.div`
svg{
    font-size:20px;
    background-color: #353839;
    margin-right:10px;
    
    padding:10px 20px;
}

`
const RecentPosts = styled.div`
margin-left:100px;

h3{
    margin-top:70px;
}

div{
    display:flex;
    margin:50px 0px 50px 0px;
    width:500px;
    span{
        display:none;
        &:nth-child(1){
            margin-left:20px;
            display:block;
            order:2;
            font-size:15px;
        }
    }
}
p{
    margin-left:20px;
    font-weight:bold;
    &:nth-child(4){
     display:none;
    }
}
.LeftSide{
    display:flex;
    flex-direction:column;
    margin:0px;
  }
img{
    width:150px;
    height:150px;
    border-radius:10px;
}

`

const Rights = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:black;
width:100%;
height:80px;
margin:0px;
h3{
    margin:0px;
}
`